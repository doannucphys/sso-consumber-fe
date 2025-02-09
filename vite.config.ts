import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());
  const port = `${env.VITE_PORT ?? '3000'}`;
  return defineConfig({
    server: {
      host: true,
      port: +port,
    },
    preview: {
      host: true,
      port: +port,
    },
    resolve: {
      alias: {
        '@views': '/src/views',
        '@hooks': '/src/hooks',
        '@routes': '/src/routes',
        '@api': '/src/api',
        '@libs': '/src/libs',
      },
    },
    plugins: [react()],
  });
};
