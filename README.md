# Mohammad Rico Ferdian Khoirunizar — Personal Portfolio

A modern, bilingual (Bahasa Indonesia / English), light & dark mode personal
portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

The project is ready to deploy on [Vercel](https://vercel.com) — just import
the repository and deploy with default settings.

## Adding your content

All portfolio content lives in `data/*.ts` — no component code needs to
change when you add or update content.

| File | What it controls |
| --- | --- |
| `data/profile.ts` | Name, hero copy, about text, CV path |
| `data/skills.ts` | Hard & soft skills |
| `data/education.ts` | Education timeline |
| `data/experience.ts` | Work experience |
| `data/organization.ts` | Organization & leadership roles |
| `data/events.ts` | Events & committee experience |
| `data/projects.ts` | Projects (starts empty — add objects here) |
| `data/achievements.ts` | Awards & competitions |
| `data/certifications.ts` | Certifications |
| `data/publications.ts` | Publications (starts empty — add objects here) |
| `data/contact.ts` | WhatsApp, email, LinkedIn, location |

### Profile photo

Photo lives at `public/profile/foto-rico.jpg` (head-and-shoulders crop).
If the file is missing, the hero falls back to an initials avatar.

### CV

CVs (Indonesian and English) live in `public/documents/`. The "Download CV"
buttons pick the file that matches the active language.

### Experience / certificate images

Experience photos are in `public/experience/<name>/` and unassigned photos in
`public/images/lainnya/`. Rename or move them freely, then update the paths in
`data/experience.ts`.

### Projects & Publications images

Place project images in `public/images/projects/` and publication cover
images in `public/images/publications/`, then reference them from
`data/projects.ts` / `data/publications.ts`.

## Tech stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
