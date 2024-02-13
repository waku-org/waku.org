// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waku',
  url: 'https://url',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Waku',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: true,
                },
              },
            },
            newsletterSubscription: {
              mailingListId: 5,
            },
          },
        },
        docs: {
          routeBasePath: '/',
          path: 'root-pages',
        },
        generated: {
          jobList: {
            jobBoard: 'waku',
          },
        },
        og: {},
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        routeBasePath: '/about',
        path: 'about',
      },
    ],
    [
      '@acid-info/docusaurus-fathom',
      {
        siteId: 'BBYCC',
        scriptUrl: 'https://fathom.status.im/tracker.js',
        hostnames: ['waku.org'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
          {
            label: 'About Waku',
            to: '/about',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            label: 'Blog',
            href: 'https://blog.waku.org/',
          },
          {
            label: 'Docs',
            href: 'https://docs.waku.org',
          },
          {
            label: 'Join Us',
            href: '/join-us',
          },
          {
            href: 'https://github.com/waku-org',
            position: 'right',
            className: 'header-github-link',
            title: 'Waku GitHub repository',
          },
        ],
      },
      footer: {
        copyright: 'Waku',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/waku_org',
                label: 'Twitter',
              },
              {
                href: 'https://discord.waku.org/',
                label: 'Discord',
              },
              {
                href: 'https://docs.waku.org',
                label: 'Docs',
              },
              {
                href: 'https://github.com/waku-org',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://blog.waku.org/',
                label: 'Blog',
              },
              {
                href: '/events',
                label: 'Events',
              },
              {
                to: '/join-us',
                label: 'Work with us',
              },
              {
                href: 'https://guide.waku.org/',
                label: 'Brand Guidelines',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
