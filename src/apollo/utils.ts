import type { LoginRespone, AuthStore } from "./types";
import type { GraphQLErrors } from "@apollo/client/errors";

/**
 * Store auth data in local storage
 * @param response
 */
export const storeAuth = (response: LoginRespone) => {
  const { login } = response;

  if (login) {
    const {
      authToken,
      refreshToken,
      user: { id },
    } = login;
    const authStore: AuthStore = {
      authToken,
      refreshToken,
      id,
    };

    localStorage.setItem("auth", JSON.stringify(authStore));
  } else {
    throw new Error("Login data is propably null");
  }
};

/**
 * GraphQL errors to human readable
 * @param errors
 * @param msg
 * @returns
 */
export const graphQLErrorsToHuman = (
  errors: GraphQLErrors,
  msg: Map<string, string>
) =>
  errors.map(({ message }) => (msg.has(message) ? msg.get(message)! : message));
