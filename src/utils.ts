import { Scores, Economist } from './types';

export function calculateResult(userScores: Scores, economists: Economist[]): Economist {
  let bestMatch: Economist = economists[0];
  let minDistance = Infinity;

  economists.forEach((econ) => {
    const distance = Math.sqrt(
      Math.pow(userScores.interventionism - econ.idealScores.interventionism, 2) +
      Math.pow(userScores.rationality - econ.idealScores.rationality, 2) +
      Math.pow(userScores.scope - econ.idealScores.scope, 2) +
      Math.pow(userScores.vision - econ.idealScores.vision, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = econ;
    }
  });

  return bestMatch;
}
