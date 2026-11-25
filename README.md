# Jun Zheng personal site

A Next.js personal site for Jun Zheng, a software engineer in Toronto.

## Sections

- **Outside work**: security profiles, software picks, and other interests
- **About**: background, experience, and education

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content and images

- Update profile details in `data/profile.ts` and `data/experience.ts`.
- Update security badges and software picks in `data/outside-work.ts`.
- Shared line icons live in `components/Icon.tsx`.
- The hero uses a local WebP cloud photo by [Israel Palacio on Unsplash](https://unsplash.com/id/foto/pemandangan-awan-dari-jendela-pesawat-1BlNRATdLFs). It is credited in the site footer.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS and site-specific CSS
- CSS transitions; reduced-motion settings are respected
