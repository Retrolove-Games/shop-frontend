import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query PageTitles {
    pages {
      nodes {
        title
      }
    }
  }
`;
