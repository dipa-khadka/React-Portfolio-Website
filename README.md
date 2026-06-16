# React Portfolio — Final Project

**Team:** Dipa (2530076) & Sujit Shrestha (2530027)

A React portfolio website showing what we learned this semester:
React Router, useState, useEffect, localStorage, components & CSS.

## How to run it
```bash
npm install      # install packages (only the first time)
npm run dev      # open the link it prints (http://localhost:5173)
```

## Pages
- **Home** – intro / hero
- **About** – team + what we learned
- **Projects** – our semester projects (uses .map + props)
- **Playground** – live Counter + To-Do demos
- **Contact** – message form saved in localStorage

## How to deploy to GitHub Pages
1. In `vite.config.js`, make sure `base` matches your repo name.
2. Push the code to GitHub.
3. Run:
   ```bash
   npm run deploy
   ```
4. On GitHub: Settings → Pages → set branch to **gh-pages** → Save.
