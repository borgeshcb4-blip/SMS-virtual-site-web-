import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: [
            'robots.txt',
            'sitemap.xml',
            'manifest.json',
            'favicon.svg',
            'maskable-icon.svg',
            'og-image.svg',
            '_redirects'
          ],
          dest: '.'
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
  }
})