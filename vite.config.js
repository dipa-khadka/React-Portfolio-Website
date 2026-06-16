import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ IMPORTANT for GitHub Pages deployment:
  // "base" must match your GitHub repository name, written as  /repo-name/
  // If you name your repo something else, change ONLY this one line.
  base: '/React-Portfolio-Website/',
})
