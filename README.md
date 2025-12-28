# Jun Zheng - Portfolio Website

A modern, componentized Next.js portfolio website built with TypeScript and Tailwind CSS.

## Features

- **Componentized Architecture**: All UI elements are broken down into reusable components
- **Dark Mode**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the codebase
- **Maintainable Code**: Clean separation of concerns with data, components, and pages

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── sections/           # Section components (About, Experience, Blog)
│   ├── Divider.tsx        # Reusable divider component
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header with profile info
│   ├── Navigation.tsx      # Tab navigation
│   └── ThemeToggle.tsx     # Dark mode toggle button
├── data/                    # Data files
│   ├── profile.ts          # Profile information
│   ├── experience.ts       # Work experience data
│   └── blog.ts             # Blog posts data
└── ...
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **JetBrains Mono**: Monospace font for code-like aesthetic

