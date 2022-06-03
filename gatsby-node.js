const path = require("path");
const queries = require("./queries");

/**
 * Create pages for Gatsby.
 */
exports.createPages = async (gatsbyUtilities) => {
  const data = await getData(gatsbyUtilities);

  // Create category pages
  await createCategoryPages(
    data.allWpProductCategory.categories,
    gatsbyUtilities
  );
};

/**
 * 📚 Create category pages.
 */
const createCategoryPages = async (categories, gatsbyUtilities) =>
  Promise.all(
    categories.map((category) => {
      return gatsbyUtilities.actions.createPage({
        path: category.link,
        component: path.resolve(`./src/templates/CategoryTemplate.tsx`),
        context: {
          id: category.id,
          slug: category.slug,
          name: category.name,
        },
      });
    })
  );

/**
 * Gather GraphQl data for page construction.
 */
async function getData({ graphql, reporter }) {
  const graphqlResult = await graphql(`
    {
      ${queries.QUERY_CATEGORIES}
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data;
}

/**
 * 🔍 Add Aliases for webpack.
 * @param {*} param0
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@src": path.resolve(__dirname, "src"),
        "@static": path.resolve(__dirname, "static"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@store": path.resolve(__dirname, "src/store"),
      },
    },
  });
};
