import { useStaticQuery, graphql } from "gatsby";

export const useProductCategories = () => {
  const data = useStaticQuery(
    graphql`
      {
        allWpProductCategory(
          filter: { parentId: { eq: null } }
          sort: { fields: menuOrder, order: DESC }
        ) {
          nodes {
            name
            slug
            wpChildren {
              nodes {
                name
                menuOrder
                wpChildren {
                  nodes {
                    name
                    menuOrder
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return data.allWpProductCategory;
};
