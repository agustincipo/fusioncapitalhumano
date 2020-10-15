module.exports = {
  siteMetadata: {
    title: 'Fusion Capital Humano',
    description: 'Sitio Web oficial consultora de Recursos Humanos',
    siteUrl: 'https://www.linkedin.com/in/agustin-cipollone/',
    author: 'Agustin Cipollone',
    icon: `${__dirname}/src/images/favicon.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `react-hook-form`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `MDB starter`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
