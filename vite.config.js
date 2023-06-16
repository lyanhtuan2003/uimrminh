import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import windiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    reactRefresh(),
    windiCSS(),
  ],
});
