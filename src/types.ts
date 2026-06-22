export type Language = 'en' | 'zh';

export type Scores = {
  marketVsIntervention: number; // 市场协调 (+1) vs 政府干预 (-1)
  incentiveVsPower: number;     // 个体激励 (+1) vs 结构权力 (-1)
  rationalVsBehavioral: number; // 理性计算 (+1) vs 行为偏误 (-1)
  efficiencyVsEquity: number;   // 效率增长 (+1) vs 公平能力 (-1)
  localVsCentral: number;       // 地方治理 (+1) vs 中心政策 (-1)
};

export type Choice = {
  text: { [key in Language]: string };
  weights: Partial<Scores>;
  explanation: { [key in Language]: string }; // Brief explanation of this option's economic philosophy
};

export type Question = {
  id: number;
  title: { [key in Language]: string };
  choices: Choice[];
  measurement: { [key in Language]: string }; // What economic tension this question captures
};

export type Concept = {
  name: string;
  desc: { [key in Language]: string };
};

export type MindsetType = {
  id: string;
  name: { [key in Language]: string };
  summary: { [key in Language]: string };
  representative: { [key in Language]: string };
  representativeBio: { [key in Language]: string };
  keywords: { [key in Language]: string[] };
  description: { [key in Language]: string };
  strengths: { [key in Language]: string[] };
  blindspots: { [key in Language]: string[] };
  concepts: Concept[];
  idealScores: Scores;
  imageUrl: string;
};
