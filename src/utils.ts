import { Scores, MindsetType } from './types';

export interface MatchResult {
  primary: MindsetType | 'hybrid';
  secondary: MindsetType[]; // The next 2 closest inclinations
  isHybrid: boolean;
  userScores: Scores;
  hasCommunitySubbadge: boolean; // Undercurrent of Ostrom community/polycentric governance
}

const KEY_MAP: { [key: string]: keyof Scores } = {
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

  // If top scores are very close ($\le 1.0$ spread between 1st and 3rd rank) or the absolute top score is very low ($\le 3.0$),
  // it means the user's opinions are highly situational and blended, triggering Hybrid.
  const isHybrid = scorePairs[0].score <= 3.0 || (scorePairs[0].score - scorePairs[2].score <= 1.0);

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
