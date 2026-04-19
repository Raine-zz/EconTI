import { Scores, Economist } from './types';

export function calculateResult(userScores: Scores, economists: Economist[]): Economist {
  const normalize = (s: Scores) => {
    const mag = Math.sqrt(
      Math.pow(s.interventionism, 2) +
      Math.pow(s.rationality, 2) +
      Math.pow(s.scope, 2) +
      Math.pow(s.vision, 2)
    );
    if (mag === 0) return s;
    return {
      interventionism: s.interventionism / mag,
      rationality: s.rationality / mag,
      scope: s.scope / mag,
      vision: s.vision / mag
    };
  };

  const u = normalize(userScores);
  let bestMatch: Economist = economists[0];
  let minDistance = Infinity;

  economists.forEach((econ) => {
    const e = normalize(econ.idealScores);
    const distance = Math.sqrt(
      Math.pow(u.interventionism - e.interventionism, 2) +
      Math.pow(u.rationality - e.rationality, 2) +
      Math.pow(u.scope - e.scope, 2) +
      Math.pow(u.vision - e.vision, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      bestMatch = econ;
    }
  });

  return bestMatch;
}
