import fetch from "isomorphic-fetch";
import { getAuth, decodeToken, isPHPTimestampExpired } from "./auth";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  concat,
} from "@apollo/client";
import type { HeadersData } from "./types";

const httpLink = createHttpLink({
  uri: process.env.GATSBY_API_URL,
  // @ts-ignore
  fetch: fetch
});

/**
 * Auth header link.
 */
const authLink = setContext(async (_, { headers = {} }) => {
  let headersData: HeadersData = {};

  // If we have auth store
  const auth = getAuth();

  if (auth) {
    const { authToken, refreshToken } = auth;
    const tokenData = decodeToken(authToken);

    if (tokenData) {
      const { exp } = tokenData;

      if (isPHPTimestampExpired(Number(exp))) {
        console.log("timestamp expired");
      }
    }
  }

  return {
    headers: {
      ...headers,
      ...headersData,
    },
  };
});

/**
 * Handle Woocommerce session.
 */
const wooCommerceLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    return response;
  });
});

export const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
});
