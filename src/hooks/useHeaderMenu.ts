import { useStaticQuery, graphql } from "gatsby";

type Node = {
  id: string;
  name: string;
  slug: string;
  childItems: {
    nodes: Node[];
  };
};

type Data = {
  allWpMenuItem: {
    nodes: Node[];
  };
};

export const useHeaderMenu = () => {
  const data = useStaticQuery<Data>(
    graphql`
      fragment childMenuItems on WpMenuItem {
        childItems {
          nodes {
            id
            label
            path
            order
            ... on WpMenuItem {
              childItems {
                nodes {
                  id
                  label
                  path
                  order
                }
              }
            }
          }
        }
      }

      {
        allWpMenuItem(
          sort: { order: ASC, fields: order }
          filter: {
            locations: { eq: GATSBY_HEADER_MENU }
            parentDatabaseId: { eq: 0 }
          }
        ) {
          nodes {
            id
            label
            path
            order
            ...childMenuItems
          }
        }
      }
    `
  );

  return data.allWpMenuItem;
};
