export interface Project {
  name: string; slug: string; tag: string; type: string; description: string;
  tech: string[]; highlight?: string; repo: string; live?: string; contribution?: string;
}
export const projects: Project[] = [
  { name: "Signalwise", slug: "signalwise", tag: "Hackathon", type: "Individual", description: "AI-powered WhatsApp notification router that decides whether each message should notify, digest or mute, with safety guardrails and prompt-injection resistance.", tech: ["Python", "Gemini", "AI Agents"], highlight: "Ranked #475 of 1,983 participants", repo: "https://github.com/l253010/whatsapp-notification-router-agent" },
  { name: "AuctionSystem", slug: "auction-system", tag: "Semester Project", type: "Team", description: "Desktop auction software with Dutch and English auctions, Admin/Seller/Buyer roles, wallets and security fees, backed by a relational SQL database.", tech: ["C++", "SFML", "SQLite"], repo: "https://github.com/l253010/OOP-Project-SEMESTER-2" },
  { name: "Pac-Dora: Star Catcher", slug: "pac-dora-star-catcher", tag: "Semester Project", type: "Team", description: "A Dora-themed 2D Pac-Man engine built from scratch with a game loop, collision detection, tile-map rendering and BFS pathfinding for enemy AI across 7 levels.", tech: ["C++", "SFML"], repo: "https://github.com/l253010/Pacman-game" },
  { name: "Digital Logics Studio", slug: "digital-logics-studio", tag: "Internship", type: "Team", description: "A web platform for learning and simulating digital logic design (DLD) and COAL. Front-end contribution including the interactive trainer board.", tech: ["React", "JavaScript"], contribution: "Built the trainer board wiring logic and worked on Frontend using React.", repo: "https://github.com/l253010/DigitalLogicsStudio" }
];
