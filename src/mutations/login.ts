import { gql } from "@apollo/client";

const LOG_IN = gql`
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

const LOG_IN_ERRORS = new Map<string, string>();
LOG_IN_ERRORS.set("empty_username", "Brak nazwy użytkownika");
LOG_IN_ERRORS.set("invalid_username", "Niepoprawna nazwa użytkownika");
LOG_IN_ERRORS.set("empty_password", "Puste hasło");

export { LOG_IN, LOG_IN_ERRORS };
