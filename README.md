# Gold Clicker Mining website

The source for [goldclickermining.com](https://goldclickermining.com), built with Vite, React and TypeScript.

## Develop

```bash
npm install
npm run dev
```

## Edit the site

All copy and links are in `src/content.ts`. Styling is in `src/styles.css`.

## Publish

```bash
npm run deploy
```

This builds the site and pushes `build/` to the `gh-pages` branch, which GitHub Pages serves.

## Do not remove

These files in `public/` are required:

| File | Why it matters |
|---|---|
| `app-ads.txt` | Verifies the game's ad inventory for AdMob. Removing it can cut ad revenue |
| `ads.txt` | Verifies the site's ad inventory |
| `CNAME` | Connects the custom domain |

## Content rule

This is the game's website. Keep token, investment and earnings content off this site.
