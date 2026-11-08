export interface EducationData { degree: string; university: string; location: string; dates: string; cgpa: string; honors: string[]; activities: string[]; achievements: string[] }
export const education: EducationData = {
  degree: "Bachelor of Science in Software Engineering", university: "FAST NUCES (National University of Computer and Emerging Sciences)", location: "Lahore", dates: "Expected Jun 2029", cgpa: "3.65 / 4.00",
  honors: ["Dean's List Scholar (1st and 2nd semesters)", "4th position in department (1st semester)"],
  activities: ["Scriptwriter, Drama Society", "Officer and Security Team Member, Global Leadership Initiative (GLI)"],
  achievements: ["HackerRank Orchestrate AI: ranked #475 of 1,983", "Aspire Leaders Program: Selected Fellow (Cohort 4)", "nexFellow Builders Program: Builder Fellow", "SOFTEC '26 and RC3: Speed Programming Participant", "Meta: Introduction to Front-End Development (Jul 2026)", "Google: Maximize Productivity with AI Tools (Jun 2026)"]
};
