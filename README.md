This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## File Structure

All page routes are located within the `/app` directory inside the `(pages)` group. Every page contains a server-rendered `page.tsx` file and a client-rendered component `Document.tsx` called out in the server page. This is to take advantage of NextJS's metadata API to populate all SEO related fields. 

Individual components are all located in the `/components` directory. All information rendered is static and is contained within this repository, no external calls to headless CMS is made.

## Packages

# framer-motion
This package is used to handle all animations in the page. These animations can be found inside the `/animations` directory inside the `/app` directory.

# recharts
This package ius used to handle all data visualization in piecharts and barcharts.

# swiper
This package is used in the carousel contained within certain pages like `/air-quality`.

# yet-another-react-lightbox
Used for creating the lightbox when the page loads for the first time in the index.

# sharp
Used for image optimization

## To Build and Export the project

```bash
npm run build
npm run export
```

This will create a `out` directory containing the static files.

You can now serve the contents of the `out` directory using any static file server, or deploy it to a static hosting service like Vercel, Netlify, AWS, or GitHub Pages.
