module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "unreachable-mdx-repro",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
