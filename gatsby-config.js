const rss = require('./src/utils/rss-options');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'The Platform That Will Make You A Better Writer',
    description:
      'The best place on the web to flex your writing muscles, get feedback from vetted users and access a database of wirting resources',
    siteUrl: process.env.BASE_URL,
    body: {
      content: 'Just some SEO content',
    },
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-feed',
      options: rss.options,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                es6: 'js',
              },
            },
          },
          `gatsby-plugin-react-helmet`,
        ],
      },
    },
  ],
};
