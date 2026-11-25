# slp.ahmadghanem

Personal website of **Ahmad Ghanem**, Speech-Language Pathologist.
Built with HTML5, Tailwind CSS v4 and vanilla JavaScript. Arabic first (RTL) with English, light/dark mode.

## Structure

```
index.html               page markup (Arabic text lives here)
src/input.css            Tailwind source + design tokens (colors)
dist/styles.css          compiled CSS (committed, so no build is needed to deploy)
js/config.js             phone, email, social links, media gallery  <- edit this most
js/content.js            services, timeline, training, FAQ (ar + en)
js/i18n.js               English translations for index.html text
js/screening-data.js     screening questions per age group (ar + en)
js/screening.js          screening logic and scoring
js/main.js               theme, menu, animations, rendering
assets/images/           logo, photo, and media/ for gallery images
```

## Common edits

- **Add a photo to the gallery:** put the file in `assets/images/media/`, then add to `media` in `js/config.js`:
  `{ type: "image", src: "assets/images/media/photo.jpg", caption: { ar: "...", en: "..." } }`
- **Add a YouTube video:** `{ type: "youtube", id: "VIDEO_ID", caption: { ar: "...", en: "..." } }`
- **Add social links:** fill the URLs in `social` in `js/config.js`.
- **Change colors:** edit the variables at the top of `src/input.css`, then rebuild.

## Develop

```bash
npm install
npm run dev      # rebuilds dist/styles.css on every change
npx serve .      # or: python3 -m http.server
```

Run `npm run build` before committing if you changed any HTML/JS classes or CSS.

## Deploy

Static site: GitHub Pages or Vercel serve the repository root as-is (`vercel.json` disables the build step).
