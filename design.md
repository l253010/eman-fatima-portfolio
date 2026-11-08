# Portfolio: Design

## 1. Direction
Clean, calm and professional. Purple and white, matching her GitHub profile. Modern but not flashy: no heavy "AI neon" look, no clutter, generous white space.

## 2. Colour tokens
| Token | Light | Dark |
|---|---|---|
| `--bg` | #FAF7FF | #0F0B18 |
| `--surface` | #FFFFFF | #181226 |
| `--text` | #1C1530 | #F3EFFA |
| `--muted` | #6A5F82 | #A79FBA |
| `--primary` | #6B3FA0 | #9B6BCF |
| `--primary-soft` | #EDE7F6 | #2A1F42 |
| `--border` | #E3D9F2 | #2E2447 |

Rule: one accent colour (purple). No pink or blue.

## 3. Typography
- Headings and body: **Plus Jakarta Sans**
- Code, tags and small labels: **JetBrains Mono**
- Scale: Hero 48 to 64px, H2 32 to 40px, body 16 to 18px, line height 1.6

## 4. Layout
- Max content width 1080px, centred, 24px side padding on mobile
- Sticky top navigation: logo, section links, theme toggle
- Sections separated by 80 to 100px vertical space
- Mobile: nav collapses to a menu button

## 5. Section designs
| Section | Design |
|---|---|
| Hero | Large name and role, short intro, two buttons (primary filled, secondary outline), small icon links |
| About | Two columns: text left, key facts or stats right (CGPA, HackerRank rank, Olympiad medal) |
| Skills | Grouped cards with pill tags |
| Projects | 2x2 grid of cards: title, type badge (Hackathon, Semester, Internship; Team or Individual), 2-line description, tech tags, "View on GitHub" link |
| Experience | Vertical timeline with role, company, dates, 2 bullets |
| Education and Achievements | Simple cards |
| Contact | Centred block with email copy button and social links |

## 6. Components
Button, Badge, Tag, Card, SectionHeading, NavBar, ThemeToggle, TimelineItem, ProjectCard.

## 7. Motion
- Fade and slide-up on scroll, 300 to 500ms
- Card hover: small lift and border colour change
- Respect `prefers-reduced-motion`
- No auto-playing animation loops

## 8. Accessibility
- Contrast ratio 4.5:1 or better for text
- Visible focus rings, full keyboard navigation
- Semantic HTML (`header`, `main`, `section`, `footer`)
- Alt text for all images, labels for form fields

## 9. Folder structure
```text
portfolio/
├── docs/            # requirements.md, design.md, content.md
├── public/          # images, resume.pdf, favicon
├── data/            # projects, experience, skills
├── components/
├── app/
├── AGENTS.md        # rules for the coding AI
└── README.md
```

## 10. Build order (for the coding AI)
1. Project setup, theme tokens, fonts, layout
2. NavBar and Hero
3. About and Skills
4. Projects
5. Experience and Education
6. Contact and Footer
7. Responsive pass, accessibility pass, SEO, performance
8. Deploy to Vercel
