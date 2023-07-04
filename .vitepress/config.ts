import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevNote",
  description: "A page where I write down",
  lang: 'en-US',
  cleanUrls: true,
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // search: {
    //   provider: 'local',
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
      { text: 'JavaScript', link: '/javascript/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        link: '/examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      },
      {
        text: 'JavaScript',
        link: '/javascript/',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/javascript/' },
        ]
      },
      {
        text: 'Principles',
        link: '/principles/',
        collapsed: true,
        items: [
          {
            text: 'S.O.L.I.D',
            link: '/principles/solid/',
            collapsed: true,
            items: [
              {
                text: 'Single Responsibility',
                link: '/principles/solid/single-responsibility',
              },
              {
                text: 'Open-Closed',
                link: '/principles/solid/open-closed',
              },
              {
                text: 'Liskov Substitution',
                link: '/principles/solid/liskov-substitution',
              },
              {
                text: 'Interface Segregation',
                link: '/principles/solid/interface-segregation',
              },
              {
                text: 'Dependency Inversion',
                link: '/principles/solid/dependency-inversion',
              },
            ]
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/phaindn' }
    ],


    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Wrote with 💖 by <b>Felixx</b>'
    },

    docFooter: {
      prev: 'Previous article',
      next: 'Next article'
    },
    returnToTopLabel: '⬆️ Top',
  }
})
