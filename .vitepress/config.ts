import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "DevNote",
  description: "A page where I write down",
  srcDir: 'src',

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    // langMenuLabel: 'Language',
    nav: [
      { text: "Home", link: "/" },
      { text: "Principles", link: "/principles/" },
      { text: "JavaScript", link: "/javascript/" },
    ],

    sidebar: [
      {
        text: "Principles",
        link: "/principles/",
        collapsed: true,
        items: [
          {
            text: "Object-Oriented Programming",
            link: "/principles/oop/",
            items: [
              {
                text: "Four Pillars of OOP",
                link: "/principles/oop/four-pillars",
              },
            ],
          },
          {
            text: "SOLID Principles",
            link: "/principles/solid/",
            collapsed: true,
            items: [
              {
                text: "Single Responsibility Principle",
                link: "/principles/solid/single-responsibility",
              },
              {
                text: "Open-Closed Principle",
                link: "/principles/solid/open-closed",
              },
              {
                text: "Liskov Substitution Principle",
                link: "/principles/solid/liskov-substitution",
              },
              {
                text: "Interface Segregation Principle",
                link: "/principles/solid/interface-segregation",
              },
              {
                text: "Dependency Inversion Principle",
                link: "/principles/solid/dependency-inversion",
              },
            ],
          },
        ],
      },
      {
        text: "JavaScript",
        link: "/javascript/",
        collapsed: true,
        items: [{ text: "Markdown Examples", link: "/javascript/" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/phaindn" }],

    footer: {
      // message: 'Released under the MIT License.',
      copyright: "Wrote with 💖 by <b>Felixx</b>",
    },

    docFooter: {
      prev: "Previous article",
      next: "Next article",
    },
    returnToTopLabel: "⬆️ Top",
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi",
      link: "/vi/",
      title: "DevNote",
      description: "Ghi lại những kiến thức về lập trình mà mình đã học được",
      themeConfig: {
        langMenuLabel: 'Ngôn ngữ',
        nav: [
          { text: "Trang chủ", link: "/vi/" },
          { text: "Lý thuyết", link: "/vi/principles/" },
          { text: "JavaScript", link: "/vi/javascript/" },
        ],

        sidebar: [
          {
            text: "Lý thuyết",
            link: "/vi/principles/",
            collapsed: true,
            items: [
              {
                text: "Object-Oriented Programming",
                link: "/vi/principles/oop/",
                items: [
                  {
                    text: "4 nguyên lý cơ bản của OOP",
                    link: "/vi/principles/oop/four-pillars",
                  },
                ],
              },
              {
                text: "SOLID Principles",
                link: "/vi/principles/solid/",
                collapsed: true,
                items: [
                  {
                    text: "Single Responsibility Principle",
                    link: "/vi/principles/solid/single-responsibility",
                  },
                  {
                    text: "Open-Closed Principle",
                    link: "/vi/principles/solid/open-closed",
                  },
                  {
                    text: "Liskov Substitution Principle",
                    link: "/vi/principles/solid/liskov-substitution",
                  },
                  {
                    text: "Interface Segregation Principle",
                    link: "/vi/principles/solid/interface-segregation",
                  },
                  {
                    text: "Dependency Inversion Principle",
                    link: "/vi/principles/solid/dependency-inversion",
                  },
                ],
              },
            ],
          },
          {
            text: "JavaScript",
            link: "/vi/javascript/",
            collapsed: true,
            items: [{ text: "Markdown Examples", link: "/vi/javascript/" }],
          },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/phaindn" }],

        footer: {
          // message: 'Released under the MIT License.',
          copyright: "Viết với cả 💖 bởi <b>Felixx</b>",
        },

        docFooter: {
          prev: "Bài trước",
          next: "Bài tiếp theo",
        },
        returnToTopLabel: "⬆️ Lên đầu",
      },
    },
  },
});
