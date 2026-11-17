import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({ mode }) => ({
  base: mode === 'github-pages' ? '/Portfolio_2026/' : '/',
  plugins: [react(), tailwindcss()],
  // Keep the local Live Server output in place on Windows while it is watched.
  build: { emptyOutDir: mode !== 'live-preview' },
  server: {
    watch: {
      ignored: [
        '**/.pages-*/**', '**/.preview-live/**', '**/.live-preview/**',
        '**/.verified-build/**', '**/.build-backups/**',
        '**/.media-*/**', '**/.pnpm-store/**', '**/.install-backup/**',
      ],
    },
  },
}));
