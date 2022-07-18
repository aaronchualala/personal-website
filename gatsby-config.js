module.exports = {
  siteMetadata: {
    title: `Aaron Chua`,
    siteUrl: `https://aaronchua.tech`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `scribbles`,
        path: `${__dirname}/data/scribbles`,
      }
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
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
