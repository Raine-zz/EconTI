export type Language = 'en' | 'zh';

export type Scores = {
  priceMechanism: number;          // 价格机制型
  macroStabilization: number;      // 宏观稳定型
  behavioralReality: number;       // 行为现实型
  equityCapability: number;        // 分配能力型
  institutionalPower: number;      // 制度权力型
  evolutionaryInnovation: number;  // 创新演化型
  communityGovernance: number;     // 社区治理隐藏维度 (副特征)
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

export type MindsetType = {
  id: string;
  name: { [key in Language]: string };
  summary: { [key in Language]: string };
  representative: { [key in Language]: string };
  keywords: { [key in Language]: string[] };
  description: { [key in Language]: string };
  habits: { [key in Language]: string[] }; // 3 crisp habits: "你通常会..."
  blindspot: { [key in Language]: string }; // 1 gentle blindspot
};
