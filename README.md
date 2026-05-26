# FiveM Server — MVP Website

A no-bullshit, single-page FiveM server site. Static HTML/CSS/JS. No build step. Just open `index.html`.

## What it does
- Shows server status, player count, and a big **Connect** button
- One-click copy IP
- Discord CTA
- Minimal rules + features
- Mobile-first dark theme

## Customize
Edit these in `app.js`:
```js
const SERVER_IP = "play.yourserver.com";
const FIVEM_API = null; // or "https://servers-frontend.fivem.net/api/servers/single/<your-code>"
```

Edit server name, tagline, rules, features, and Discord invite in `index.html`.

## Deploy
Drop the folder on GitHub Pages, Netlify, Vercel or any static host. Done.

## Files
- `index.html` — markup
- `styles.css` — dark theme
- `app.js` — status fetch + copy IP

## License
MIT
