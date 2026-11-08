<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6B3FA0&height=180&section=header&text=Eman%20Fatima&fontColor=FFFFFF&fontSize=52&fontAlignY=38&desc=Software%20Engineering%20%7C%20AI%20Agents&descColor=EDE7F6&descSize=18&descAlignY=60" width="100%" alt="Eman Fatima portfolio" />
</p>

<p align="center"><i>Personal portfolio for full-stack software engineering and AI agent work.</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-6B3FA0?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-8E5BC4?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript strict" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v3-B39DDB?style=for-the-badge&logo=tailwindcss&logoColor=black" alt="Tailwind CSS v3" />
  <img src="https://img.shields.io/badge/Framer%20Motion-11-D1C4E9?style=for-the-badge&logo=framer&logoColor=2A1747" alt="Framer Motion" />
</p>

---

## About

This portfolio presents Eman Fatima, a Software Engineering student at FAST NUCES Lahore building full-stack web applications and AI agents.

The site includes:

- A terminal-style hero with animated project and stack output
- About, skills, projects, experience, education, and contact sections
- Responsive mobile navigation with active-section highlighting
- Light and dark mode with persisted preference
- Command palette with `Ctrl+K` / `Cmd+K`
- Copy-email interaction and downloadable resume link
- Cursor spotlight, project card tilt, scroll progress, motion reveals, and timeline animation
- Reduced-motion support for visitors who prefer less animation

---

## Featured projects

| Project | Type | Description |
|---|---|---|
| [Signalwise](https://github.com/l253010/whatsapp-notification-router-agent) | HackerRank Orchestrate hackathon · Individual | AI-powered WhatsApp notification router that decides whether messages should notify, digest, or mute. |
| [AuctionSystem](https://github.com/l253010/OOP-Project-SEMESTER-2) | OOP semester project · Team | Desktop auction software with English and Dutch auctions, wallets, roles, and SQLite. |
| [Pac-Dora: Star Catcher](https://github.com/l253010/Pacman-game) | Programming Fundamentals semester project · Team | A C++ and SFML Pac-Man-style game with collision detection, tile maps, and BFS enemy AI. |
| [Digital Logics Studio](https://github.com/l253010/DigitalLogicsStudio) | QuantumLogics internship · Team | React platform for learning and simulating digital logic design, including an interactive trainer board. |

---

## Tech stack

- **Framework:** Next.js 14 App Router
- **Language:** TypeScript with strict checking
- **Styling:** Tailwind CSS v3 and CSS variables
- **Motion:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Space Grotesk, Inter, and JetBrains Mono through `next/font`
- **Deployment target:** Vercel

---

## Local development

### Requirements

- Node.js 18.17 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Checks

```bash
npm run typecheck
npm run lint
```

The project is configured for Next.js 14. If lint reports an ESLint major-version compatibility error, use the Next.js 14-compatible ESLint 8 release:

```bash
npm install --save-dev eslint@8.57.1
```

Do not run `npm run build` during every edit. Run it once before deployment if you want to verify the production bundle locally.

---

## Content and assets

Portfolio content is kept in typed files under [`data/`](./data):

- [`data/site.ts`](./data/site.ts) — title, description, name, role, email, and social links
- [`data/skills.ts`](./data/skills.ts) — skill groups and marquee items
- [`data/projects.ts`](./data/projects.ts) — project descriptions, tags, technologies, and repositories
- [`data/experience.ts`](./data/experience.ts) — experience entries
- [`data/education.ts`](./data/education.ts) — degree, CGPA, honors, activities, and achievements

Add your real resume at:

```text
public/resume.pdf
```

The portfolio already links to `/resume.pdf`. Replace the placeholder file with the actual PDF; no component change is needed.

### Adding a profile picture

1. Put the image in `public/`, for example:

   ```text
   public/profile.jpg
   ```

2. Reference it in a component with:

   ```tsx
   import Image from "next/image";

   <Image
     src="/profile.jpg"
     alt="Eman Fatima"
     width={320}
     height={320}
     priority
   />
   ```

3. Add a rounded shape such as `rounded-xl` or `rounded-full` and an accessible `alt` description.

The current portfolio does not display the profile image yet. Add the `Image` element to [`components/Hero.tsx`](./components/Hero.tsx) or [`components/About.tsx`](./components/About.tsx) where you want it to appear.

---

## Deploying to Vercel

### Option 1: Import from GitHub

1. Push the repository to GitHub:

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. Open [vercel.com](https://vercel.com) and sign in with GitHub.
3. Select **Add New → Project**.
4. Import `l253010/eman-fatima-portfolio`.
5. Keep the detected **Next.js** framework settings.
6. Click **Deploy**.

Vercel automatically installs dependencies and builds the app. No environment variables are currently required.

### Option 2: Deploy with the Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts, then deploy production with:

```bash
vercel --prod
```

### What will my portfolio link be?

After the first deployment, Vercel assigns a URL similar to:

```text
https://eman-fatima-portfolio.vercel.app
```

The exact URL is decided by Vercel and may include a different available project name. You can copy the real URL from the Vercel project dashboard or deployment success screen.

You can later connect a custom domain from **Vercel → Project → Settings → Domains**.

---

## Remaining manual TODOs

- Replace the placeholder [`public/resume.pdf`](./public/resume.pdf) with the real resume PDF.
- Replace the placeholder [`public/favicon.ico`](./public/favicon.ico) with a square browser-tab icon.
- Add `public/profile.jpg` or another image format if the profile photo should appear.
- Confirm the Digital Logics Studio contribution wording and live URL in [`data/projects.ts`](./data/projects.ts).

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6B3FA0&height=90&section=footer" width="100%" alt="" />
</p>

<p align="center"><i>Built with Next.js, Tailwind, and too much coffee.</i></p>
