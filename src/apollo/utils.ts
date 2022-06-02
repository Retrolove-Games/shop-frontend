import type { GraphQLErrors } from "@apollo/client/errors";
import type { DocumentNode } from "graphql";

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

/**
 * Convert gql object to string
 * @param gql
 * @returns
 */
export const gqlToString = (gql: DocumentNode) => gql.loc?.source.body;

/**
 * Raw GraphQL query (without Apollo).
 * @param url
 * @param gql
 * @param variables
 * @returns
 */
export const rawGqlQuery = async <T>(
  url: string,
  gql: string,
  variables?: Record<string, string>
): Promise<T> => {
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: gql,
      variables,
    }),
  });

  return await resp.json();
};
