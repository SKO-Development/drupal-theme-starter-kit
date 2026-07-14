import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { mergeConfig } from 'vite';
import twigDrupal from 'vite-plugin-twig-drupal';

const require = createRequire(import.meta.url);

const storybookRoot = fileURLToPath(new URL('..', import.meta.url));
const repositoryRoot = resolve(storybookRoot, '..');
const themeRoot = resolve(repositoryRoot, 'theme');

const config = {
  stories: [
    '../../theme/components/**/*.stories.js',
    '../stories/**/*.stories.js',
  ],

  addons: [
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  async viteFinal(viteConfig) {
    return mergeConfig(viteConfig, {
      plugins: [
        twigDrupal({
          namespaces: {
            starter_theme: themeRoot,
          },
        }),
      ],

      resolve: {
        alias: [
          {
            find: /^twig$/,
            replacement: require.resolve('twig'),
          },
          {
            find: /^drupal-attribute$/,
            replacement: require.resolve('drupal-attribute'),
          },
          {
            find: /^drupal-twig-extensions\/twig$/,
            replacement: require.resolve(
              'drupal-twig-extensions/twig',
            ),
          },
          {
            find: '@theme',
            replacement: themeRoot,
          },
          {
            find: '@components',
            replacement: resolve(themeRoot, 'components'),
          },
        ],
      },

      optimizeDeps: {
        include: [
          'twig',
          'drupal-attribute',
          'drupal-twig-extensions/twig',
        ],
      },

      server: {
        fs: {
          allow: [
            repositoryRoot,
            themeRoot,
          ],
        },
      },
    });
  },
};

export default config;