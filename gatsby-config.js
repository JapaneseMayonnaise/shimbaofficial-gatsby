module.exports = {
  siteMetadata: 
  {
    title: `Elliot Shimba`,
    description: `A somewhat-intermittent record of a queer & poc full-stack web developer's journey mainly focus on 
                  web development, operating systems, queer & poc inclusion in tech`,
    author: `Elliot Shimba`,
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Shimba`,
        short_name: `Shimba`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00D1B2`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1300,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/growthLogResources/posts/images`,
      },
    },
  ],
}
