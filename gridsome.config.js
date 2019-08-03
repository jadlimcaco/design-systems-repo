// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Design Systems Repo",
  siteUrl: 'https://jadlimcaco.github.io',
  titleTemplate: '%s',
  transformers: {
    remark: {}
  },
  icon: {
    favicon: './src/assets/images/favicon.png',
    touchicon: './src/assets/images/favicon.png'
  },

  plugins: [
    /* Books
    ========================================== */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/books/**/*.md",
        typeName: "Books",
        route: '/:slug',
      }
    },
    /* Talks
    ========================================== */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/talks/**/*.md",
        typeName: "Talks",
        route: '/:slug',
      }
    },
    /* Tools
    ========================================== */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/tools/**/*.md",
        typeName: "Tools",
        route: '/:slug',
      }
    },
    /* Articles
    ========================================== */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/articles/**/*.md",
        typeName: "Articles",
        route: '/:slug',
      }
    },
    /* Design Systems
    ========================================== */
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/design-systems/**/*.md",
        typeName: "Systems",
        route: '/:slug',
      }
    },
    /* Google Analytics
    ========================================== */
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-2969411-50'
      }
    },
    /* Google Analytics
    ========================================== */
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1400,
        height: 900
      }
    }
  ]

};