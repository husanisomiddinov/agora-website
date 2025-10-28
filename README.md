# Project Agora Website

A high-performance static website for Project Agora, an AI-powered knowledge institution.

## Tech Stack

- **Next.js 15** with App Router (Static Site Generation)
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **MDX** for blog system

## Performance Targets

- ✅ Lighthouse Score: 95+ all metrics
- ✅ First Contentful Paint: < 1.5s
- ✅ Largest Contentful Paint: < 2.5s
- ✅ Total Bundle Size: < 200KB initial load
- ✅ Full static export (no server required)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The static site will be exported to the `/out` directory
```

## Brand Identity

### Colors
- **Primary**: Crimson Red (#991B1E)
- **Background**: Cream White (#FAF7F2)
- **Text**: Dark Gray (#1A1A1A)

### Typography
- **Serif**: Crimson Pro (headings, logo)
- **Sans-serif**: Inter (body text, UI)

## Project Structure

```
agora-website/
├── app/                # Next.js App Router pages
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── About.tsx
│   └── CTA.tsx
└── public/             # Static assets
```

## License

© 2025 Project Agora. All rights reserved.
