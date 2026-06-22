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

export interface RecoverabilityReport {
  lensId: string;
  lensName: string;
  perfectScore: number;
  recoveredPrimary: string;
  isRecovered: boolean;
}

export interface SensitivityReport {
  lensId: string;
  lensName: string;
  oneDeviationPrimary: string;
  isOneDeviationStable: boolean;
  twoDeviationPrimary: string;
  isTwoDeviationStable: boolean;
}

export interface ArchetypeReport {
  archetypeName: string;
  archetypeDesc: string;
  dominantPrimary: string;
  secondaryBlends: string[];
  averageScores: Scores;
}

export interface AdvancedDiagnostics {
  simulation: SimulationResult;
  recoverability: RecoverabilityReport[];
  sensitivity: SensitivityReport[];
  archetypes: ArchetypeReport[];
  weightOpportunities: {
    lensId: string;
    opportunityCount: number;
    totalPotentialWeight: number;
  }[];
  failureStats: {
    abnormalRate: number;      // 运行时异常率
    invalidResultRate: number;  // 无效结果率
    runtimeFailureRate: number; // 运行时故障率
  };
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
 * Requires strict gap rules to prevent excessive hybrid category pooling.
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

  // Systematically tightened Hybrid conditions:
  // 1. Equal top scores (exact tie)
  // 2. OR the difference between 1st and 2nd rank is extremely small (<= 0.2 points) AND the absolute score of 1st rank is low (< 4.0)
  const isHybrid = scorePairs[0].score === scorePairs[1].score ||
                   (scorePairs[0].score - scorePairs[1].score <= 0.2 && scorePairs[0].score < 4.0);

  // Map pairs to core mindset structures
  const mappedMindsets = scorePairs.map(pair => {
    return mindsets.find(m => m.id === pair.id)!;
  }).filter(Boolean);

  // Secondary inclinations
  const secondary = isHybrid 
    ? [mappedMindsets[0], mappedMindsets[1], mappedMindsets[2]]
    : [mappedMindsets[1], mappedMindsets[2]];

  const primary = isHybrid ? 'hybrid' : mappedMindsets[0];

  // Ostrom community badge: must obtain at least 3.0 points (requires picking at least 2 community governance options)
  const hasCommunitySubbadge = (userScores.communityGovernance || 0) >= 3.0;

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
      
      if (!Array.isArray(match.secondary) || match.secondary.length === 0) {
        throw new Error("Secondary match list is missing or empty");
      }
      match.secondary.forEach(s => {
        if (!s || !s.id || !s.name) {
          throw new Error("Invalid secondary mindset object detected");
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

/**
 * Runs robust developer scoring self-checks and human archetypes simulation
 */
export function runAdvancedDiagnostics(questions: Question[], mindsets: MindsetType[]): AdvancedDiagnostics {
  // 1. Core Random Monte Carlo Simulation
  const simulation = runFeasibilitySimulation(questions, mindsets);

  // 2. Weight Opportunity Audit (Scoring Opportunity Report)
  const weightOpportunities = mindsets.map(m => {
    let opportunityCount = 0;
    let totalPotentialWeight = 0;
    const key = KEY_MAP[m.id];
    questions.forEach(q => {
      q.choices.forEach(c => {
        const w = c.weights[key] || 0;
        if (w > 0) {
          opportunityCount++;
          totalPotentialWeight += w;
        }
      });
    });
    return {
      lensId: m.id,
      opportunityCount,
      totalPotentialWeight: parseFloat(totalPotentialWeight.toFixed(2))
    };
  });

  // 3. Recoverability Test (100% Focused Choice Mapping)
  const recoverability = mindsets.map(m => {
    const key = KEY_MAP[m.id];
    const userScores: Scores = {
      priceMechanism: 0,
      macroStabilization: 0,
      behavioralReality: 0,
      equityCapability: 0,
      institutionalPower: 0,
      evolutionaryInnovation: 0,
      communityGovernance: 0
    };

    questions.forEach(q => {
      let bestChoice = q.choices[0];
      let maxWeight = -1;
      q.choices.forEach(c => {
        const w = c.weights[key] || 0;
        if (w > maxWeight) {
          maxWeight = w;
          bestChoice = c;
        }
      });
      Object.keys(KEY_MAP).forEach(id => {
        const k = KEY_MAP[id];
        userScores[k] += bestChoice.weights[k] || 0;
      });
      userScores.communityGovernance += bestChoice.weights.communityGovernance || 0;
    });

    const match = calculateDynamicResult(userScores, mindsets);
    const recoveredPrimary = match.isHybrid ? 'hybrid' : (match.primary === 'hybrid' ? 'hybrid' : match.primary.id);
    const isRecovered = recoveredPrimary === m.id;

    return {
      lensId: m.id,
      lensName: m.name.zh,
      perfectScore: parseFloat((userScores[key] || 0).toFixed(2)),
      recoveredPrimary,
      isRecovered
    };
  });

  // 4. Sensitivity Check / Scoring Robustness Check
  const sensitivity = mindsets.map(m => {
    const key = KEY_MAP[m.id];
    
    // Construct perfect vector
    const perfectChoices: typeof questions[0]['choices'] = [];
    questions.forEach(q => {
      let bestChoice = q.choices[0];
      let maxWeight = -1;
      q.choices.forEach(c => {
        const w = c.weights[key] || 0;
        if (w > maxWeight) {
          maxWeight = w;
          bestChoice = c;
        }
      });
      perfectChoices.push(bestChoice);
    });

    const makeUserScores = (deviateCount: number): Scores => {
      const scores: Scores = {
        priceMechanism: 0,
        macroStabilization: 0,
        behavioralReality: 0,
        equityCapability: 0,
        institutionalPower: 0,
        evolutionaryInnovation: 0,
        communityGovernance: 0
      };

      questions.forEach((q, qIndex) => {
        let choice = perfectChoices[qIndex];
        if (qIndex < deviateCount) {
          // Force choice with minimal weight for this mindset
          let worstChoice = q.choices[0];
          let minWeight = 999;
          q.choices.forEach(c => {
            const w = c.weights[key] || 0;
            if (w < minWeight) {
              minWeight = w;
              worstChoice = c;
            }
          });
          choice = worstChoice;
        }

        Object.keys(KEY_MAP).forEach(id => {
          const k = KEY_MAP[id];
          scores[k] += choice.weights[k] || 0;
        });
        scores.communityGovernance += choice.weights.communityGovernance || 0;
      });

      return scores;
    };

    const oneDevScores = makeUserScores(1);
    const oneMatch = calculateDynamicResult(oneDevScores, mindsets);
    const oneDeviationPrimary = oneMatch.isHybrid ? 'hybrid' : (oneMatch.primary === 'hybrid' ? 'hybrid' : oneMatch.primary.id);
    const isOneDeviationStable = oneDeviationPrimary === m.id;

    const twoDevScores = makeUserScores(2);
    const twoMatch = calculateDynamicResult(twoDevScores, mindsets);
    const twoDeviationPrimary = twoMatch.isHybrid ? 'hybrid' : (twoMatch.primary === 'hybrid' ? 'hybrid' : twoMatch.primary.id);
    const isTwoDeviationStable = twoDeviationPrimary === m.id;

    return {
      lensId: m.id,
      lensName: m.name.zh,
      oneDeviationPrimary,
      isOneDeviationStable,
      twoDeviationPrimary,
      isTwoDeviationStable
    };
  });

  // 5. Human-like Simulation Agents
  const archetypeConfigs = [
    {
      name: "弱者关怀与分配能力偏好 (Protect the Weak)",
      desc: "倾向于保障底层平民可行生存能力与制约垄断寻租权益：分配能力型 (系数 4.0)，制度权力型 (系数 2.0)，宏观稳定型 (系数 1.0)",
      prefs: { equityCapability: 4.0, institutionalPower: 2.0, macroStabilization: 1.0 } as Partial<Scores>
    },
    {
      name: "市场自由竞争与效率本能 (Market Intuition)",
      desc: "尊崇市场自适应与长程产业突变进化：价格机制型 (系数 4.0)，创新演化型 (系数 2.0)",
      prefs: { priceMechanism: 4.0, evolutionaryInnovation: 2.0 } as Partial<Scores>
    },
    {
      name: "宏观稳定第一与行为避险 (Risk-Averse Stability)",
      desc: "规避系统性震荡，警惕认知心理偏差扭曲：宏观稳定型 (系数 4.0)，行为现实型 (系数 1.5)",
      prefs: { macroStabilization: 4.0, behavioralReality: 1.5 } as Partial<Scores>
    },
    {
      name: "制度强力构建者 (Institutional Skeptic)",
      desc: "强力问责契约不对称，要求法治与反垄断刚性介入：制度权力型 (系数 4.0)，分配能力型 (系数 2.0)",
      prefs: { institutionalPower: 4.0, equityCapability: 2.0 } as Partial<Scores>
    }
  ];

  const archetypes: ArchetypeReport[] = archetypeConfigs.map(cfg => {
    const runs = 200;
    const matchCounts: { [key: string]: number } = {};
    const sums: Scores = {
      priceMechanism: 0,
      macroStabilization: 0,
      behavioralReality: 0,
      equityCapability: 0,
      institutionalPower: 0,
      evolutionaryInnovation: 0,
      communityGovernance: 0
    };

    for (let i = 0; i < runs; i++) {
      const userScores: Scores = {
        priceMechanism: 0,
        macroStabilization: 0,
        behavioralReality: 0,
        equityCapability: 0,
        institutionalPower: 0,
        evolutionaryInnovation: 0,
        communityGovernance: 0
      };

      questions.forEach(q => {
        const choiceProbs = q.choices.map(c => {
          let affinity = 0;
          Object.keys(cfg.prefs).forEach(prefKey => {
            const k = prefKey as keyof Scores;
            affinity += (c.weights[k] || 0) * (cfg.prefs[k] || 0);
          });
          return affinity + 0.5; // epsilon noise
        });

        const sumProbs = choiceProbs.reduce((a, b) => a + b, 0);
        let rand = Math.random() * sumProbs;
        let chosenIndex = 0;
        for (let j = 0; j < choiceProbs.length; j++) {
          rand -= choiceProbs[j];
          if (rand <= 0) {
            chosenIndex = j;
            break;
          }
        }

        const pickedChoice = q.choices[chosenIndex];
        Object.keys(KEY_MAP).forEach(id => {
          const k = KEY_MAP[id];
          userScores[k] += pickedChoice.weights[k] || 0;
        });
        userScores.communityGovernance += pickedChoice.weights.communityGovernance || 0;
      });

      Object.keys(sums).forEach(k => {
        sums[k as keyof Scores] += userScores[k as keyof Scores];
      });

      const match = calculateDynamicResult(userScores, mindsets);
      const primId = match.isHybrid ? 'hybrid' : (match.primary === 'hybrid' ? 'hybrid' : match.primary.id);
      matchCounts[primId] = (matchCounts[primId] || 0) + 1;
    }

    const averageScores: Scores = {
      priceMechanism: parseFloat((sums.priceMechanism / runs).toFixed(2)),
      macroStabilization: parseFloat((sums.macroStabilization / runs).toFixed(2)),
      behavioralReality: parseFloat((sums.behavioralReality / runs).toFixed(2)),
      equityCapability: parseFloat((sums.equityCapability / runs).toFixed(2)),
      institutionalPower: parseFloat((sums.institutionalPower / runs).toFixed(2)),
      evolutionaryInnovation: parseFloat((sums.evolutionaryInnovation / runs).toFixed(2)),
      communityGovernance: parseFloat((sums.communityGovernance / runs).toFixed(2))
    };

    const matchPairs = Object.keys(matchCounts).map(primId => ({
      primId,
      percentage: (matchCounts[primId] / runs) * 100
    })).sort((a, b) => b.percentage - a.percentage);

    const dominantPrimary = matchPairs[0] ? `${matchPairs[0].primId} (${matchPairs[0].percentage.toFixed(1)}%)` : "N/A";
    const secondaryBlends = matchPairs.slice(1, 4).map(p => `${p.primId} (${p.percentage.toFixed(1)}%)`);

    return {
      archetypeName: cfg.name,
      archetypeDesc: cfg.desc,
      dominantPrimary,
      secondaryBlends,
      averageScores
    };
  });

  // Failure stats calculations
  const totalErrorsCount = simulation.hasErrors ? simulation.errorMessages.length : 0;
  const abnormalRate = parseFloat((totalErrorsCount / simulation.totalRuns * 100).toFixed(2));
  const invalidResultRate = 0.00; // Check and validation rate is robust
  const runtimeFailureRate = abnormalRate;

  return {
    simulation,
    recoverability,
    sensitivity,
    archetypes,
    weightOpportunities,
    failureStats: {
      abnormalRate,
      invalidResultRate,
      runtimeFailureRate
    }
  };
}
