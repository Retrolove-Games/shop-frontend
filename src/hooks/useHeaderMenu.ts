import { useStaticQuery, graphql } from "gatsby";

export type MenuItemNode = {
  id: string;
  label: string;
  slug: string;
  path: string;
  childItems: {
    nodes: MenuItemNode[];
  };
};

type Data = {
  allWpMenuItem: {
    nodes: MenuItemNode[];
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
