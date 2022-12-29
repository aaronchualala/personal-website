module.exports = {
  siteMetadata: {
    title: `Aaron Chua`,
    siteUrl: `https://aaronchua.tech`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `src/images/self-photo-circle-resized.png`,
        icons: [
          {
            src: `src/images/self-photo-circle-resized.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `skills`,
        path: `${__dirname}/data/experience`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects`,
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 3304374,
        sv: 6,
      },
    },
  ],
}
