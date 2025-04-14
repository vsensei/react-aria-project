import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: 'https://vsensei.github.io/react-aria-project/',
  build: {
    outDir: './build',
  },
  plugins: [react()],
});
