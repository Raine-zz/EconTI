export type Language = 'en' | 'zh';

export type Scores = {
  interventionism: number; // -1 to 1 (Market vs State)
  rationality: number;     // -1 to 1 (Behavioral vs Rational)
  scope: number;           // -1 to 1 (Micro vs Macro)
  vision: number;          // -1 to 1 (Pragmatic/Positive vs Visionary/Normative)
};

export type Choice = {
  text: { [key in Language]: string };
  weights: Partial<Scores>;
};

export type Question = {
  id: number;
  title: { [key in Language]: string };
  choices: Choice[];
};

export type Economist = {
  id: string;
  name: { [key in Language]: string };
  summary: { [key in Language]: string };
  description: { [key in Language]: string };
  authorBio: { [key in Language]: string };
  commonTraits: { [key in Language]: string };
  idealScores: Scores;
  imageUrl: string;
};
