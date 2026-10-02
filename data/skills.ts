export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design"] },
  { category: "Backend & Data", items: ["Node.js", "REST APIs", "MySQL", "PostgreSQL", "Database Design", "Authentication"] },
  { category: "Application Development", items: ["Management Systems", "Marketplace Platforms", "Monitoring & Reporting", "Role-Based Access", "Scheduling", "Request Workflows"] },
  { category: "Design & Workflow", items: ["Figma", "UI/UX Design", "Wireframing", "High-Fidelity Prototyping", "Git", "GitHub"] },
  { category: "Game Development", items: ["Roblox Studio", "Luau", "Gameplay Systems", "Level Design", "Player Progression", "Game Testing"] },
  { category: "Professional Skills", items: ["Problem Solving", "Attention to Detail", "Team Collaboration", "Adaptability", "Continuous Learning"] },
];
