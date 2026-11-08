# Portfolio: Requirements

## 1. Goal
A personal portfolio site that helps recruiters and hiring managers quickly see who Eman is, what she has built, and how to contact her.

**Primary outcome:** a recruiter can understand her profile and open a project or contact link within 60 seconds.

## 2. Audience
1. Recruiters and hiring managers (entry-level AI engineering and full-stack roles)
2. Engineers and teammates who want to see code quality
3. Freelance clients (secondary)

## 3. Positioning
Full-stack developer (MERN) who builds AI agents. Strong maths and problem-solving background. Currently an AI Engineer (part-time) at Afrium.

## 4. Pages and sections (single page, anchor navigation)
| # | Section | Content |
|---|---|---|
| 1 | Hero | Name, one-line role, short intro, buttons: View Projects, Contact; GitHub and LinkedIn links |
| 2 | About | 3 to 4 sentences: background, what she builds, what she is learning (AI agents) |
| 3 | Skills | Grouped: Languages, MERN, AI and Agents, Tools |
| 4 | Projects | 4 featured projects (see below), each with description, tags, repo link |
| 5 | Experience | Afrium (AI Engineer, part-time, Aug 2026 to present); QuantumLogics (Web Developer Intern, Jul to Sep 2026) |
| 6 | Education and Achievements | FAST NUCES Lahore (BS Software Engineering); HackerRank Orchestrate #475 of 1,983; Silver Medal, International Copernicus Mathematics Olympiad; Dean's Honor List (twice) |
| 7 | Contact | Email, LinkedIn, GitHub, simple contact form or mailto button |

## 5. Featured projects
| Project | Type | One-liner | Repo |
|---|---|---|---|
| Signalwise | Hackathon (HackerRank Orchestrate), individual | AI-powered WhatsApp notification router: notify, digest or mute | whatsapp-notification-router-agent |
| Pac-Dora: Star Catcher | Semester project (PF), team | Dora-themed Pac-Man in C++ and SFML with BFS ghost AI, 7 levels | Pacman-game |
| AuctionSystem | Semester project (OOP), team | English and Dutch auctions, wallets, SQLite, SFML GUI | OOP-Project-SEMESTER-2 |
| Digital Logics Studio | Internship, team | Web platform for learning DLD and COAL; front-end contribution | DigitalLogicsStudio |

Optional later: VitalOrbit (NASA Space Apps, Nov 14-15, 2026) once the event is done.

## 6. Functional requirements
- Responsive on mobile, tablet and desktop
- Dark and light theme toggle (dark-first)
- Smooth scroll navigation with active section highlight
- Every project card links to its GitHub repo; live demo link only if one exists
- Contact: email copy button and mailto; form only if backed by a real service
- Resume: downloadable PDF (to be added)

## 7. Non-functional requirements
- Lighthouse score 90+ for performance, accessibility, SEO
- Page loads in under 2 seconds on a normal connection
- Keyboard accessible, readable contrast, alt text on images
- SEO: title, description, Open Graph image
- All content comes from data files, so updates do not touch components

## 8. Content rules
- Only real information. No invented metrics, clients or demo links.
- No phone number or home address on the site.
- Wording is plain and specific, not buzzword-heavy.

## 9. Tech decisions (proposed)
- Next.js (App Router) with TypeScript and Tailwind CSS
- Content in `data/` files (projects, experience, skills)
- Deployed on Vercel from the GitHub repo `portfolio`
- Optional: Framer Motion for subtle animations

## 10. Out of scope (v1)
Blog, CMS, login, multi-language, analytics dashboards.

## 11. Open items (fill these in)
- [ ] Final portfolio email and whether to show it publicly
- [ ] Professional photo: include or not
- [ ] Resume PDF
- [ ] Custom domain or default `.vercel.app`
- [ ] Which achievements to show (CGPA visible or not)
