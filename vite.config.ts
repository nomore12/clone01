import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// @ts-ignore
// eslint-disable-next-line no-undef
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src'),
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
    },
  },
});
