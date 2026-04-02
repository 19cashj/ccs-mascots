# CCS Mascots – Astro Site

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Adding gallery images

1. Drop your fursuit photos into **`public/images/`**
2. Open **`src/pages/index.astro`**
3. Add each filename to the `galleryImages` array:

```js
const galleryImages = [
  '/images/fursuit-1.jpg',
  '/images/fursuit-2.jpg',
  '/images/fursuit-3.jpg',
  // ...
];
```

That's it — the marquee picks them up automatically, splits them between
the two columns, and loops infinitely with no duplicates visible at the same time.

## Adding the logo

Place your logo file at **`public/images/logo.webp`** (or any format).
Update the `<img src>` in `src/pages/index.astro` if you use a different filename.

## Editing nav links

Open **`src/components/Nav.astro`** and update the `links` array.

## Project structure

```
ccs-mascots/
├── public/
│   └── images/          ← drop your images here
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   └── MarqueeGallery.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   └── index.astro  ← edit gallery images + hero content here
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```
