import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) =>({
  base: command === 'build' ? '/acme-mortgage-calculator/' : '/',
  plugins: [react()],
  build : {
    outDir: 'build',
    manifest: false,
  }
}))
