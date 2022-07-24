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
        icon: `src/images/self-photo-circle.png`,
        icons: [
          {
            src: `src/images/self-photo-circle.png`,
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
  ],
}
