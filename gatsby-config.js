module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    siteUrl: `https://aaronchua.tech`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/data/blog`,
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
