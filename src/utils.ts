import { Scores, MindsetType, Question } from './types';

export interface MatchResult {
  primary: MindsetType | 'hybrid';
  secondary: MindsetType[]; // The next 2 closest inclinations
  isHybrid: boolean;
  userScores: Scores;
  hasCommunitySubbadge: boolean; // Undercurrent of Ostrom community/polycentric governance
}

export interface SimulationResult {
  totalRuns: number;
  matchCounts: { [key: string]: number };
  hybridCount: number;
  averageScores: Scores;
  communitySubbadgeCount: number;
  hasErrors: boolean;
  errorMessages: string[];
}

export const KEY_MAP: { [key: string]: keyof Scores } = {
  "price-mechanism": "priceMechanism",
  "macro-stabilization": "macroStabilization",
  "behavioral-reality": "behavioralReality",
  "equity-capability": "equityCapability",
  "institutional-power": "institutionalPower",
  "evolutionary-innovation": "evolutionaryInnovation"
};

/**
 * Calculates user scores and matches them to the 6 economic lenses.
 * Selects the absolute highest score, and flags next two closest choices.
 * Implements a balanced hybrid detector if top choices are too close or low-voted.
 */
export function calculateDynamicResult(userScores: Scores, mindsets: MindsetType[]): MatchResult {
  // Sort core frameworks based on scores
  const scorePairs = Object.keys(KEY_MAP).map(id => {
    const key = KEY_MAP[id];
    const score = userScores[key] || 0;
    return { id, score };
  });

  // Sort descending
  scorePairs.sort((a, b) => b.score - a.score);

  // If top scores are very close (\le 1.0 spread between 1st and 3rd rank) or the absolute top score is very low (\le 3.0),
  // or if there is a flat tie at the top (top two are equal),
  // it means the user's opinions are highly situational and blended, triggering Hybrid.
  const isHybrid = scorePairs[0].score <= 3.0 || 
                   (scorePairs[0].score - scorePairs[2].score <= 1.0) ||
                   (scorePairs[0].score === scorePairs[1].score);

  // Map pairs to core mindset structures found in mindsets array
  const mappedMindsets = scorePairs.map(pair => {
    return mindsets.find(m => m.id === pair.id)!;
  }).filter(Boolean);

  // Secondary inclinations: for a standard result, it is index 1 and 2.
  // For a hybrid result, we can list index 0, 1, 2 as their top blended frameworks!
  const secondary = isHybrid 
    ? [mappedMindsets[0], mappedMindsets[1], mappedMindsets[2]]
    : [mappedMindsets[1], mappedMindsets[2]];

  const primary = isHybrid ? 'hybrid' : mappedMindsets[0];

  // Community subbadge is activated if Ostrom communityGovernance points are 2.0 or higher
  const hasCommunitySubbadge = (userScores.communityGovernance || 0) >= 2.0;

  return {
    primary,
    secondary,
    isHybrid,
    userScores,
    hasCommunitySubbadge
  };
}

/**
 * Feasibility simulation runner that executes 1000 trials with randomized choices
 * and gathers stats and logical correctness metrics to ensure there is no bias or edge-case crashes.
 */
export function runFeasibilitySimulation(questions: Question[], mindsets: MindsetType[]): SimulationResult {
  const totalRuns = 1000;
  const matchCounts: { [key: string]: number } = {};
  mindsets.forEach(m => {
    matchCounts[m.id] = 0;
  });
  
  let hybridCount = 0;
  let communitySubbadgeCount = 0;
  let hasErrors = false;
  const errorMessages: string[] = [];
  
  const scoreSums: Scores = {
    priceMechanism: 0,
    macroStabilization: 0,
    behavioralReality: 0,
    equityCapability: 0,
    institutionalPower: 0,
    evolutionaryInnovation: 0,
    communityGovernance: 0
  };

  for (let i = 0; i < totalRuns; i++) {
    const simulatedAnswers: Scores[] = [];
    
    // For each question, choose a random option
    questions.forEach(q => {
      const choiceIndex = Math.floor(Math.random() * q.choices.length);
      const choice = q.choices[choiceIndex];
      const weights = choice.weights;
      
      const fullWeights: Scores = {
        priceMechanism: weights.priceMechanism ?? 0,
        macroStabilization: weights.macroStabilization ?? 0,
        behavioralReality: weights.behavioralReality ?? 0,
        equityCapability: weights.equityCapability ?? 0,
        institutionalPower: weights.institutionalPower ?? 0,
        evolutionaryInnovation: weights.evolutionaryInnovation ?? 0,
        communityGovernance: weights.communityGovernance ?? 0
      };
      simulatedAnswers.push(fullWeights);
    });
    
    // Aggregate scores
    const defaultScores: Scores = {
      priceMechanism: 0,
      macroStabilization: 0,
      behavioralReality: 0,
      equityCapability: 0,
      institutionalPower: 0,
      evolutionaryInnovation: 0,
      communityGovernance: 0
    };
    
    const aggregated = simulatedAnswers.reduce((acc, curr) => ({
      priceMechanism: acc.priceMechanism + (curr.priceMechanism || 0),
      macroStabilization: acc.macroStabilization + (curr.macroStabilization || 0),
      behavioralReality: acc.behavioralReality + (curr.behavioralReality || 0),
      equityCapability: acc.equityCapability + (curr.equityCapability || 0),
      institutionalPower: acc.institutionalPower + (curr.institutionalPower || 0),
      evolutionaryInnovation: acc.evolutionaryInnovation + (curr.evolutionaryInnovation || 0),
      communityGovernance: acc.communityGovernance + (curr.communityGovernance || 0)
    }), defaultScores);
    
    // Accumulate for averages
    scoreSums.priceMechanism += aggregated.priceMechanism;
    scoreSums.macroStabilization += aggregated.macroStabilization;
    scoreSums.behavioralReality += aggregated.behavioralReality;
    scoreSums.equityCapability += aggregated.equityCapability;
    scoreSums.institutionalPower += aggregated.institutionalPower;
    scoreSums.evolutionaryInnovation += aggregated.evolutionaryInnovation;
    scoreSums.communityGovernance += aggregated.communityGovernance;
    
    try {
      const match = calculateDynamicResult(aggregated, mindsets);
      if (!match) {
        throw new Error("No match result returned");
      }
      if (match.isHybrid) {
        hybridCount++;
      } else {
        const prim = match.primary;
        if (prim !== 'hybrid' && prim && prim.id) {
          matchCounts[prim.id] = (matchCounts[prim.id] || 0) + 1;
        } else {
          throw new Error("Primary mindset is undefined or missing ID on non-hybrid path");
        }
      }
      
      if (match.hasCommunitySubbadge) {
        communitySubbadgeCount++;
      }
      
      // Ensure secondary array exists and is fully populated
      if (!Array.isArray(match.secondary) || match.secondary.length === 0) {
        throw new Error("Secondary match list is missing or empty");
      }
      match.secondary.forEach(s => {
        if (!s || !s.id || !s.name) {
          throw new Error("Invalid secondary mindset object detected in match results");
        }
      });
      
    } catch (err: any) {
      hasErrors = true;
      errorMessages.push(`Trial ${i} failed: ${err.message || err}`);
    }
  }
  
  const averageScores: Scores = {
    priceMechanism: parseFloat((scoreSums.priceMechanism / totalRuns).toFixed(2)),
    macroStabilization: parseFloat((scoreSums.macroStabilization / totalRuns).toFixed(2)),
    behavioralReality: parseFloat((scoreSums.behavioralReality / totalRuns).toFixed(2)),
    equityCapability: parseFloat((scoreSums.equityCapability / totalRuns).toFixed(2)),
    institutionalPower: parseFloat((scoreSums.institutionalPower / totalRuns).toFixed(2)),
    evolutionaryInnovation: parseFloat((scoreSums.evolutionaryInnovation / totalRuns).toFixed(2)),
    communityGovernance: parseFloat((scoreSums.communityGovernance / totalRuns).toFixed(2))
  };
  
  return {
    totalRuns,
    matchCounts,
    hybridCount,
    averageScores,
    communitySubbadgeCount,
    hasErrors,
    errorMessages
  };
}
