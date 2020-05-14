module.exports = {
  siteMetadata: 
  {
    title: `Elliot Shimba`
  },
  plugins: 
  [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-transformer-remark`,
  ],
}
