import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    vituum(),
    pug({
      root: './src',
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
};
