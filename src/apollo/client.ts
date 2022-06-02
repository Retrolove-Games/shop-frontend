import fetch from "isomorphic-fetch";
import {
  getAuthStore,
  decodeToken,
  isPHPTimestampExpired,
  refreshAuthToken,
} from "./auth";
import {
  storeAuthToken,
  setWooSession,
  getWooSession,
  removeWooSession,
} from "./storageHelpers";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  from,
} from "@apollo/client";
import type { HeadersData } from "./types";
import { nanoid } from "nanoid";

/**
 * Basic http link.
 */
const httpLink = createHttpLink({
  uri: process.env.GATSBY_API_URL,
  // @ts-ignore
  fetch: fetch,
});

/**
 * 💰 Handle Woocommerce session.
 */
const wooCommerceLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const wooSessionToken = getWooSession();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const session: string | null = headers.get("woocommerce-session");

      if (session !== null) {
        if (session === "false") {
          removeWooSession();
        } else if (session && wooSessionToken !== session) {
          console.log("setting session woo");
          setWooSession(session);
        }
      }
    }

    return response;
  });
});

/**
 *🔒 Auth header link.
 */
const authLink = setContext(async (_, { headers = {} }) => {
  let headersData: HeadersData = {};
  let headerAuthToken;
  const auth = getAuthStore();
  const wooSessionToken = getWooSession();

  // ✅ If we have auth store
  if (auth) {
    const { authToken, refreshToken } = auth;
    const tokenData = decodeToken(authToken);

    if (tokenData) {
      const { exp } = tokenData;

      console.log(
        "⌛ token is valid until",
        (Number(exp) * 1000 - Date.now()) / 60
      );

      // ⌛ Now we know that timestamp expired
      if (isPHPTimestampExpired(Number(exp))) {
        console.log("timestamp expired");

        const refreshTokenData = await refreshAuthToken(
          process.env.GATSBY_API_URL!,
          refreshToken,
          nanoid()
        );

        headerAuthToken = refreshTokenData.data.refreshJwtAuthToken.authToken;
        storeAuthToken(headerAuthToken);
      } else {
        headerAuthToken = authToken;
      }
    }
  }

  // 🗣️ Auth header
  if (headerAuthToken) {
    headersData.authorization = `Bearer ${headerAuthToken}`;
  }

  // 🗣️ Woo session
  if (wooSessionToken) {
    headersData["woocommerce-session"] = `Session ${wooSessionToken}`;
  }

  return {
    headers: {
      ...headers,
      ...headersData,
    },
  };
});

export const client = new ApolloClient({
  link: from([wooCommerceLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
