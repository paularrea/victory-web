module.exports = {
  siteMetadata: {
    title: `Victory Switzerland`,
    description: `Victory Switzerland`,
    author: `Pau Larrea`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `fr`, `de`],
        defaultLanguage: `de`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 2000,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Victory Switzerland`,
        short_name: `VICTORY`,
        start_url: `/`,
        background_color: `#1D1F2A`,
        theme_color: `#FBD872`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
