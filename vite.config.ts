import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import PurgeIcons from 'vite-plugin-purge-icons';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      PurgeIcons({
        /* PurgeIcons Options */
        content: ['**/*.html', '**/*.js', '**/*.vue'],
      }),
      // element plus
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    server: {
      proxy: {
        '/dev-api': {
          target: 'http://XXX:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, ''),
        },
      },
    },
  });
