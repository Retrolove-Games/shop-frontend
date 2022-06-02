import { gql } from "@apollo/client";

export const REFRESH_TOKEN = gql`
  mutation RefreshAuthToken($id: String!, $refreshToken: String!) {
    refreshJwtAuthToken(
      input: { clientMutationId: $id, jwtRefreshToken: $refreshToken }
    ) {
      authToken
    }
  }
`;
