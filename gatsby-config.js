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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },

    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

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

    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.GATSBY_API_URL,
      },
      html: {
        createStaticFiles: false,
        useGatsbyImage: false,
      },
      type: {
        MediaItem: { createFileNodes: false },
      },
    },
  ],
};
