import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation LoginUser($username: String!, $password: String!, $id: String!) {
    login(
      input: { clientMutationId: $id, username: $username, password: $password }
    ) {
      authToken
      refreshToken
      user {
        id
        name
      }
    }
  }
`;

export const LOG_IN_ERRORS = {
  "empty_username": "Brak nazwy użytkownika",
  "invalid_username": "Niepoprawna nazwa użytkownika",
  "empty_password": "Puste hasło",
};
