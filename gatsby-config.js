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
    // WP
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.GATSBY_API_URL,
      },
      html: {
        createStaticFiles: false,
        useGatsbyImage: false,
      },
    },

    // Images
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },

    "gatsby-plugin-image",

    // Others
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
  ],
};
