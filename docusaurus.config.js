// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waku',
  url: 'https://waku.org',
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
          id: 'root-pages',
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
      '@acid-info/docusaurus-umami',
      {
        websiteId: '0102a512-0a4c-4b65-a149-e47b9a8c235d',
        scriptSrc: 'https://umami.bi.status.im/script.js',
        dataDomains: 'waku.org',
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
            label: 'About',
            to: '/about',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            label: 'Join Us',
            to: '/join-us',
          },
          {
            label: 'Events',
            to: '/events',
          },
          {
            label: 'Specs',
            to: '/specs',
          },
          {
            label: 'News',
            to: '/news',
          },
          {
            label: 'Blog',
            href: 'https://blog.waku.org/',
          },
          {
            href: 'mailto:team@waku.org',
            label: 'Contact',
            position: 'right',
            className:
              'lsd-button lsd-button--small lsd-button--outlined navbar-lsd-button',
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
                href: 'https://www.youtube.com/@waku-org',
                label: 'YouTube',
              },
              {
                href: 'https://www.linkedin.com/company/waku-org',
                label: 'LinkedIn',
              },
              {
                href: 'https://warpcast.com/waku',
                label: 'Farcaster',
              },
              {
                href: 'https://t.me/waku_org',
                label: 'Telegram',
              },
            ],
          },
          {
            items: [
              {
                href: 'https://docs.waku.org',
                label: 'Docs',
              },
              {
                href: 'https://github.com/waku-org',
                label: 'GitHub',
              },
            ],
          },
          {
            items: [
              {
                to: '/join-us',
                label: 'Work with Us',
              },
              {
                href: 'https://guide.waku.org/',
                label: 'Brand Guidelines',
              },
            ],
          },
          {
            items: [
              {
                href: '/terms',
                label: 'Terms of Use',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/rules-of-engagement',
                label: 'Rules of Engagement',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
