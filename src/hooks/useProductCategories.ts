import { useStaticQuery, graphql } from "gatsby";

type Node = {
  name: string;
  slug: string;
  wpChildren: {
    nodes: Node[]
  }
}

type Data = {
  allWpProductCategory: {
    nodes: Node[]
  }
}

export const useProductCategories = () => {
  const data = useStaticQuery<Data>(
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
