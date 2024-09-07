import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    optimizeDeps: {
      include: ['@mui/material/Tooltip', '@emotion/styled'],
    },
    server: {
      port: parseInt(process.env.VITE_PORT as string),
    },
    build: {
      outDir: 'build',
    },
  });
};
