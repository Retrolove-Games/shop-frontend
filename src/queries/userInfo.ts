import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query UserInfo {
    viewer {
      id
      username
      firstName
      lastName
    }
  }
`;