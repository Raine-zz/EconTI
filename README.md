# EconTI — 经济学思维视角测试 (Economic Mindset Indicator)

> **"当你在观察这个世界的喧嚣时，你潜意识里在套用哪一种经济学思维偏好？"**

EconTI 是一个极具美感、面向普通大众与经济学爱好者的认知倾向测试。它并非以黑白分明的“道德好坏”或“政治立场”对人进行归类，而是通过精选的生活民生权衡问题，探明你在思考宏观周期、科技分配、民生救助时的底层思维范式。

---

## 🌟 核心革新

为了彻底摒弃旧版“抽象文学化人格”与“最后一题不计入”的机制偏漏，本项目进行了颠覆式重构：

1. **项目定位升级**：从“你像哪位经济学家”演进为**“你习惯用哪种经济学视角看世界？”**，结果返回系统化的「类型报告」，包含思维长处、观察盲点与推荐深度探索的名词文献。
2. **五维精密思维轴 (5D Axes)**：
   * **市场协调 vs 政府干预** (Market Coordination vs State Intervention)
   * **个体激励 vs 结构权力** (Individual Incentives vs Structural Power)
   * **理性计算 vs 行为偏误** (Rational Calculation vs Behavioral Bias)
   * **效率增长 vs 公平能力** (Efficiency & Growth vs Equity & Capability)
   * **地方治理 vs 中心政策** (Local & Polycentric vs Centralized Blueprint)
3. **真实生活政策权衡 (Scientific Dilemmas)**：
   设计了 **10 道高信息量、无道德污名化**的微观与宏观权衡题，覆盖*城市住房危机、AI 技术性失业、外卖平台零工博弈、金融挤兑救助、教育筛选、排碳公地悲剧*等典型场景，每个选项都代表有历史学说依托的理性经济逻辑。
4. **可信的评分机制**：
   * **Top 3 匹配度全景输出**：使用多维空间向量余弦相似度（Cosine Similarity），评估并呈现用户对 8 大思维流派的综合契合排名。
   * **均衡折中型 (Hybrid) 拦截门槛**：若用户五维分值全数极度趋近于中轴（各维绝对值 $\le 0.18$），系统判定其为理性的「全景辩证混合型/融合视角」，拒绝教条归类，极具专业说服力！
5. **🔥 Bug 闭合修复**：
   重构了旧版中因为 React `setAnswers` 异步延迟更新导致的“第 10 题（最后一题）无法计入最终成绩”的问题，现在全线操作可瞬时完美、绝对精准地计算最终匹配结果。

---

## 📖 八大经典思维流派

* ⚖️ **市场协调型** (典型代表：Adam Smith / Friedrich Hayek)
* 🎯 **自由选择型** (典型代表：Milton Friedman / Gary Becker)
* 🌊 **宏观稳定型** (典型代表：John Maynard Keynes)
* 🧩 **行为助推型** (典型代表：Richard Thaler / Daniel Kahneman)
* 🏛️ **制度权力型** (典型代表：Joan Robinson / Thorstein Veblen)
* 🤝 **公平能力型** (典型代表：Amartya Sen)
* 🌲 **社区治理型** (典型代表：Elinor Ostrom)
* ⚡ **创新演化型** (典型代表：Joseph Schumpeter)

---

## 🛠️ 前端呈现与重构

* **儒雅书香配色 (Academic Slate Theme)**：采用柔和护眼的米黄白/碳灰纸面质感配色，告别刺眼而低质的深色盲目渐变。
* **无第三方辅助的可视化雷达条**：使用原生精简 Tailwind CSS 宽度渐变，完美兼容移动端/桌面端的极速高帧率视效。
* **名词沙盒展开**：用户可点击推荐卡片，在就地展开的专业中英双语词库条目中进行长线学习。

### 安装与运行指导

本项目基于 **React + TypeScript + Vite** 构建，拥有极为洁净的依赖树。

1. **安装依赖**：
   ```bash
   npm install
   ```
2. **启动本地开发服务器**：
   ```bash
   npm run dev
   ```
3. **生产环境构建打包**：
   ```bash
   npm run build
   ```
