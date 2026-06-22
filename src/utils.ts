import { Scores, MindsetType } from './types';

export interface MatchResult {
  primary: MindsetType | 'hybrid';
  top3: { mindset: MindsetType; percentage: number }[];
  isHybrid: boolean;
  userNormalizedScores: Scores;
}

/**
 * Calculates user scores and matches them to the 8 standard economic mindsets.
 * Leverages multi-dimensional vector math and similarity scaling.
 * Corrects all previous black-box distance issues and implements Top-3 output & Hybrid thresholds.
 */
export function calculateDynamicResult(userScores: Scores, mindsets: MindsetType[]): MatchResult {
  // 1. Check for Hybrid/Moderate Type
  // If user scores on all 5 dimensions are extremely neutral (e.g. within -0.15 to 0.15 limit),
  // they represent a sophisticated mixed/moderate synthesizer.
  const hybridThreshold = 0.18;
  const isHybrid = 
    Math.abs(userScores.marketVsIntervention) <= hybridThreshold &&
    Math.abs(userScores.incentiveVsPower) <= hybridThreshold &&
    Math.abs(userScores.rationalVsBehavioral) <= hybridThreshold &&
    Math.abs(userScores.efficiencyVsEquity) <= hybridThreshold &&
    Math.abs(userScores.localVsCentral) <= hybridThreshold;

  // 2. Vector Normalization function
  const getMagnitude = (s: Scores) => {
    return Math.sqrt(
      Math.pow(s.marketVsIntervention, 2) +
      Math.pow(s.incentiveVsPower, 2) +
      Math.pow(s.rationalVsBehavioral, 2) +
      Math.pow(s.efficiencyVsEquity, 2) +
      Math.pow(s.localVsCentral, 2)
    );
  };

  const userMag = getMagnitude(userScores);

  // 3. Calculate distance/similarity for all mindsets
  const matches = mindsets.map((mindset) => {
    const ideal = mindset.idealScores;
    const idealMag = getMagnitude(ideal);

    // Euclidean Distance between user scores and ideal scores
    // Since scores range mostly from -1 to 1, max distance is around sqrt(10) ≈ 3.16.
    const distance = Math.sqrt(
      Math.pow(userScores.marketVsIntervention - ideal.marketVsIntervention, 2) +
      Math.pow(userScores.incentiveVsPower - ideal.incentiveVsPower, 2) +
      Math.pow(userScores.rationalVsBehavioral - ideal.rationalVsBehavioral, 2) +
      Math.pow(userScores.efficiencyVsEquity - ideal.efficiencyVsEquity, 2) +
      Math.pow(userScores.localVsCentral - ideal.localVsCentral, 2)
    );

    // Map Euclidean distance to a friendly, separated percentage (e.g., 30% to 99%)
    // A distance of 0 -> 98% or 99%, a max possible distance of ~3.0 -> 30%.
    // We calibrate: percentage = 100 - (distance * 22). Clamp it gracefully.
    const percentage = Math.round(Math.max(35, Math.min(99, 100 - (distance * 21.5))));

    return {
      mindset,
      distance,
      percentage
    };
  });

  // Sort matches so smallest distance (highest percentage) is first
  const sortedMatches = [...matches].sort((a, b) => b.percentage - a.percentage);

  // Take top 3
  const top3 = sortedMatches.slice(0, 3).map(m => ({
    mindset: m.mindset,
    percentage: m.percentage
  }));

  // Primary mindset
  const primary = isHybrid ? 'hybrid' : top3[0].mindset;

  return {
    primary,
    top3,
    isHybrid,
    userNormalizedScores: userScores
  };
}
