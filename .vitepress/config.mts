import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DeepslateMC",
  description: "DeepslateMC Server Software",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/img/logo.webp' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'General',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Download', link: '/download' },
          { text: 'Translations', link: '/translations' }
        ]
      },
      {
        text: 'Docs',
        items: [
          { text: 'Welcome', link: '/docs/' },
          { text: 'Features', link: '/docs/features' },
          {
            text: 'Commands and Permissions',
            link: '/docs/commands_and_permissions/',
            collapsed: false,
            items: [
              { text: 'Commands', link: '/docs/commands_and_permissions/commands' },
              { text: 'Permissions', link: '/docs/commands_and_permissions/permissions' },
              { text: 'Managing commands', link: '/docs/commands_and_permissions/managing-commands' }
            ]
          },
          {
            text: 'Files',
            link: '/docs/files/',
            collapsed: false,
            items: [
              { text: 'Configuration', link: '/docs/files/config' },
              { text: 'Messages', link: '/docs/files/messages' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DeepslateMC' },
      { icon: 'discord', link: 'https://deepslatemc.de/dc' }
    ]
  }
})
