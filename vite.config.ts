import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({command, mode, ssrBuild}) => {
  return {
    base: process.env.APP_NAME ?
        `${process.env.APP_NAME}/` :
        './',
    ...(command === 'build' ? {} : {}),
    plugins: [react(), svgr()],
  };
});

