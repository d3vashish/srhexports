import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import devtoolsJson from 'vite-plugin-devtools-json'
import { nitroV2Plugin } from '@tanstack/nitro-v2-vite-plugin'
import path from 'path'

const forSites = process.env?.FOR_SITES === 'true'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    forSites &&
      nitroV2Plugin({
        compatibilityDate: '2025-10-08',
        preset: 'node',
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

export default config
