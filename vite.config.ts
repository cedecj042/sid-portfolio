import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const publicAssets = [
  'favicon.svg',
  'TOPIT.jpg',
  'sidequest.png',
  'readingful.png',
  'BizExpense.jpg',
  'fonts/Poppins/Poppins-Regular.ttf',
  'fonts/Poppins/Poppins-SemiBold.ttf',
  'fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
]

// https://vite.dev/config/
export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'copy-portfolio-assets',
      closeBundle() {
        for (const asset of publicAssets) {
          const destination = resolve('dist', asset)
          mkdirSync(dirname(destination), { recursive: true })
          copyFileSync(resolve('public', asset), destination)
        }
      },
    },
  ],
})
