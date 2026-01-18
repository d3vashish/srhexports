import { copyFile, mkdir, readdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const outputDir = join(__dirname, '../dist/client')
const clientDir = join(outputDir, 'client')

async function ensureIndexHtml() {
  try {
    // TanStack Start outputs HTML to dist/client/client/index.html
    // We need to copy it to dist/client/index.html for static hosting
    const sourcePath = join(clientDir, 'index.html')
    const targetPath = join(outputDir, 'index.html')
    
    try {
      // Check if source exists
      const sourceFiles = await readdir(clientDir)
      if (sourceFiles.includes('index.html')) {
        await copyFile(sourcePath, targetPath)
        console.log('✓ Copied index.html from dist/client/client/ to dist/client/')
      } else {
        console.warn('⚠ No index.html found in dist/client/client/')
      }
    } catch (err) {
      // Check if index.html already exists in root
      try {
        const rootFiles = await readdir(outputDir)
        if (rootFiles.includes('index.html')) {
          console.log('✓ index.html already exists in dist/client/')
        } else {
          throw new Error(`Could not find index.html: ${err.message}`)
        }
      } catch (rootErr) {
        throw new Error(`Could not find index.html in either location: ${err.message}`)
      }
    }
  } catch (error) {
    console.error('Error ensuring index.html:', error)
    process.exit(1)
  }
}

ensureIndexHtml()
