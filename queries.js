const QUERY_CATEGORIES = `
  allWpProductCategory(
    filter: {slug: {ne: "uncategorized"}}
  ) {
    categories: nodes {
      name
      slug
      id
      link
    }
  }
`;

module.exports.QUERY_CATEGORIES = QUERY_CATEGORIES;
