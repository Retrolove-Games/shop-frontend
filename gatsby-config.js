require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const breakpoints = require("@retrolove-games/ui-themes").breakpoints;

module.exports = {
  siteMetadata: {
    title: `Shop Frontend`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Source+Sans+Pro:400,400i,700&display=swap",
            "Zilla+Slab+Highlight:700&display=swap",
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-fresnel`,
      options: {
        breakpoints,
      },
    },

    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: process.env.GATSBY_API_URL,
      },
    },

    // 📚 Source section
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.GATSBY_API_URL,
        auth: {
          token: process.env.API_TOKEN,
        },
      },
    },
  ],
};
