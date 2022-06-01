import type { GraphQLErrors } from "@apollo/client/errors";

/**
 * GraphQL errors to human readable
 * @param errors
 * @param msg
 * @returns
 */
 export const graphQLErrorsToHuman = (
  errors: GraphQLErrors,
  ...msg: Record<string, string>[]
) => {
  const allMsg = Object.assign({}, ...msg);
  return errors.map(({ message }) =>
    allMsg.hasOwnProperty(message) ? allMsg[message]! : `Błąd: ${message}`
  );
};
