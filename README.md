<div align="center">
  <h1>Prince Bhakta â€” Developer Â· Creative Editor Â· Builder</h1>
  <p>Portfolio and creative engineering showcase bridging low-level systems engineering with cinematic visual storytelling and real-time multiplayer architecture.</p>
  
  <p>
    <a href="https://princebhakta.dev"><strong>Live Demo</strong></a> â€¢
    <a href="https://github.com/kingplayz1/Prince_Portfolio">Repository</a> â€¢
    <a href="https://youtube.com/@KINGPLAYZ008">YouTube</a> â€¢
    <a href="https://github.com/kingplayz1">GitHub</a>
  </p>
</div>

---

## ðŸŽ¯ Overview

A sophisticated personal portfolio website showcasing dual-discipline expertise:

| Discipline | Focus Areas |
|------------|-------------|
| **Systems Engineering** | FiveM Lua (128-tick), WebSocket delta compression, Redis in-memory state, Node.js workers, Docker clusters |
| **Web Development** | React 19, Three.js/WebGL, TypeScript, Tailwind CSS v4, Motion (Framer Motion 12) |
| **Creative & Motion** | Premiere Pro, After Effects, DaVinci Resolve Studio, Blender, LUT grading, NLE timeline simulation |
| **Content Creation** | YouTube @KINGPLAYZ008 â€” tech tutorials, game dev, creative workflows |

---

## ðŸ›  Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 19, TypeScript 7, Vite 8 |
| **Styling** | Tailwind CSS v4, CSS Variables, Custom Design Tokens |
| **Animation** | Motion (Framer Motion 12), CSS Animations |
| **Icons** | Lucide React, Material Symbols Outlined |
| **Fonts** | Plus Jakarta Sans, Inter, JetBrains Mono |
| **Deployment** | Vercel (recommended), Docker |

---

## ðŸš€ Quick Start

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm / pnpm / yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/kingplayz1/Prince_Portfolio.git
cd Prince_Portfolio

# Install dependencies
npm install

# Start development server (port 3000)
npm run dev
```

Open **http://localhost:3000** in your browser.

### Production Build
```bash
npm run build
```

Output: `dist/` folder (static assets, ready for deployment)

### Type Checking
```bash
npm run lint
# Runs: tsc --noEmit
```

---

## ðŸ“ Project Structure

```
â”œâ”€â”€ public/
â”‚   â””â”€â”€ prince.png              # Portrait asset (served at /prince.png)
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ components/             # Reusable UI components
â”‚   â”‚   â”œâ”€â”€ Navbar.tsx          # Top nav + mobile bottom dock
â”‚   â”‚   â”œâ”€â”€ Footer.tsx          # Signature monolith footer
â”‚   â”‚   â”œâ”€â”€ Toast.tsx           # Real-time notifications
â”‚   â”‚   â”œâ”€â”€ ContactModal.tsx    # Contact form modal
â”‚   â”‚   â”œâ”€â”€ CaseStudyDrawer.tsx # Project detail drawer
â”‚   â”‚   â””â”€â”€ VideoPlayerModal.tsx # Video showcase player
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ HomePage.tsx        # Hero, terminal, projects, tech stack, timeline
â”‚   â”‚   â”œâ”€â”€ WorkPage.tsx        # Filterable grid, subsystems, git clone
â”‚   â”‚   â”œâ”€â”€ CreativePage.tsx    # Showreel, LUT switcher, NLE timeline, YouTube hub
â”‚   â”‚   â””â”€â”€ AboutPage.tsx       # Dual discipline, milestones, rig inspector, terminal
â”‚   â”œâ”€â”€ data/
â”‚   â”‚   â””â”€â”€ portfolioData.ts    # All content: projects, videos, milestones, tools
â”‚   â”œâ”€â”€ types.ts                # TypeScript interfaces
â”‚   â”œâ”€â”€ App.tsx                 # Routing, state management, modals
â”‚   â”œâ”€â”€ main.tsx                # Entry point
â”‚   â””â”€â”€ index.css               # Tailwind v4, CSS variables, custom animations
â”œâ”€â”€ index.html                  # HTML template with SEO/meta tags
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ vite.config.ts
â””â”€â”€ .env.example                # Environment variables template
```

---

## âœ¨ Key Features

### Home Page (`/`)
- Interactive terminal simulation with runnable commands
- Animated project category cards with tech filtering
- Video showcase carousel with modal player
- Repository explorer with live stats
- Animated timeline of milestones

### Work Page (`/work`)
- Filterable project grid (All / Systems / Web / Creative)
- Per-project interactive subsystems:
  - GitHub repo stats (stars, forks, language)
  - File tree explorer
  - Runtime metrics simulation
- Git clone command generator

### Creative Page (`/creative`)
- Showreel video player with:
  - Resolution selector (4K/1080p/720p)
  - LUT preset switcher (Rec709, Log, Cinematic, Teal-Orange, etc.)
- NLE Timeline Simulator:
  - Multi-track (V1-V3, A1-A2)
  - Razor tool, ripple delete, snapping
  - Keyframe animation curves
- YouTube content hub with filtering

### About Page (`/about`)
- **Dual Discipline Toggle**: Developer Mindset â†” Editor & Creator Eye
- Milestone dossiers with technical logs
- Live Rig & Tool Telemetry Inspector (click any tool for specs)
- AST Packet Burst Simulator (LuaJIT delta sync visualization)
- Interactive terminal with diagnostics commands (`sys-query`, `ping`, `stack`, `mode`, `contact`)

---

## ðŸŒ Vercel Deployment

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from project root
vercel

# For production
vercel --prod
```

### Option 2: GitHub Integration
1. Go to [vercel.com](https://vercel.com) â†’ **Add New Project**
2. Import `kingplayz1/Prince_Portfolio`
3. Vercel auto-detects Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**

### Custom Domain Setup`nTo deploy to a custom URL like `PrincePortfolio.vercel.app`: `n1. After deploying with `vercel`, go to Vercel Dashboard → `Settings → Domains` `n2. Add your custom domain and follow the DNS verification steps `n3. Or rename the Vercel project in `Settings → General` to your desired name `n`n### Environment Variables (if needed)
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GA_ID` | Google Analytics Measurement ID | No |
| `VITE_SITE_URL` | Canonical URL for SEO | No |

Add these in Vercel Dashboard â†’ **Settings â†’ Environment Variables**.

---

## ðŸŽ¨ Customization

### Design Tokens (`src/index.css`)
```css
:root {
  --color-bg: #0e0e0e;
  --color-text: #e5e2e1;
  --color-accent: #6c63ff;
  --color-accent-glow: #c4c0ff;
  --color-success: #5ee151;
  --color-info: #a2e7ff;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### Content (`src/data/portfolioData.ts`)
All portfolio content is centralized â€” edit this file to update:
- Projects, videos, milestones
- Rig tools & hardware specs
- Technology stack items
- Social links

---

## ðŸ“ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type checking |
| `npm run clean` | Remove `dist/` and `server.js` |

---

## ðŸ“„ License

MIT License â€” feel free to use as inspiration for your own portfolio.

---

## ðŸ™‹â€â™‚ï¸ Connect

- **GitHub**: [@kingplayz1](https://github.com/kingplayz1)
- **YouTube**: [@KINGPLAYZ008](https://youtube.com/@KINGPLAYZ008)
- **Discord**: `kingplayz`
- **LinkedIn**: [linkedin.com/in/princebhakta](https://linkedin.com)

---

<div align="center">
  <sub>Built with â¤ï¸ using React 19 + Vite 8 + Tailwind v4 + Motion 12</sub>
</div>
