export interface SkillGroup { name: string; items: string[] }
export const skillGroups: SkillGroup[] = [
  { name: "Languages", items: ["C++", "Python", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"] },
  { name: "Frameworks & Tools", items: ["React.js", "Node.js", "Express.js", "SFML", "LangGraph", "REST APIs", "Git", "GitHub"] },
  { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { name: "Core Competencies", items: ["OOP", "Data Structures and Algorithms", "AI Agent Architecture", "Model Context Protocol (MCP)"] }
];
export const marqueeSkills = skillGroups.flatMap((group) => group.items);
