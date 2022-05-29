module.exports.QUERY_CATEGORIES = `
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

module.exports.GET_ALL_GROUPED_PRODUCTS = `
  groupedProducts: allWpSimpleProduct(
    sort: {fields: [stockStatus, date], order: [ASC, DESC]}
    filter: {status: {eq: "publish"}}
  ) {
    group(field: productCategories___nodes___link) {
      categorySlug: fieldValue
      products: edges {
        node {
          id
        }
      }
      totalCount
    }
  }
`;
