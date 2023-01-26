import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command, mode, ssrBuild}) => {
  return {
    base: process.env.GITHUB_REPOSITORY ?
        `${process.env.GITHUB_REPOSITORY}/` :
        './',
    ...(command === 'build' ? {} : {}),
    plugins: [react()],
  };
});

