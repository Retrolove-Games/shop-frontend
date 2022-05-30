import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation LoginUser($username: String!, $password: String!, $id: String!) {
    login(
      input: { clientMutationId: $id, username: $username, password: $password }
    ) {
      authToken
      user {
        id
        name
      }
    }
  }
`;
