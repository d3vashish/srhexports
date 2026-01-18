import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import path from 'path'

export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      // Enable prerendering only for public homepage
      prerender: {
        enabled: true,
        // Only prerender the homepage, skip auth/protected routes
        routes: ['/'],
        // Disable auto-discovery to prevent crawling auth routes
        autoStaticPathsDiscovery: false,
        crawlLinks: false,
      },
    }),
    devtoolsJson(),
    viteReact(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '::',
    allowedHosts: true,
    hmr: true,
  },
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
  },
})
