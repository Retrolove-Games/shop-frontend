import type { GraphQLErrors } from "@apollo/client/errors";

/**
 * GraphQL errors to human readable
 * @param errors
 * @param msg
 * @returns
 */
 export const graphQLErrorsToHuman = (
  errors: GraphQLErrors,
  ...msg: Map<string, string>[]
) => {
  const allMsg = new Map(msg.flatMap((map) => [...map]));
  return errors.map(({ message }) =>
    allMsg.has(message) ? allMsg.get(message)! : `Błąd: ${message}`
  );
};
