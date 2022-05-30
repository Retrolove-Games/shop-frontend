import { isBrowser } from "@src/helpers/utils";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";

type HeadersData = {
  "woocommerce-session"?: string | null;
  authorization?: string | null;
};

const middleware = new ApolloLink((operation, forward) => {
  let headersData: HeadersData = {};

  if (isBrowser()) {
    // Woocommerce session string
    const session = localStorage.getItem("woo-session");

    if (session) {
      headersData["woocommerce-session"] = `Session ${session}`;
    }

    // WordPress JWT
    const rawAuth = localStorage.getItem("auth");

    if (rawAuth) {
      const auth = JSON.parse(rawAuth);

      if (auth && auth.authToken) {
        headersData.authorization = `authorization ${auth.authToken}`;
      }
    }

    // Append required headers
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...headersData,
      },
    }));
  }

  return forward(operation);
});

const afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (isBrowser()) {
      const context = operation.getContext();
      const {
        response: { headers },
      } = context;
      const session = headers.get("woocommerce-session");

      if (session) {
        if ("false" === session) {
          localStorage.removeItem("woo-session");
        } else if (localStorage.getItem("woo-session") !== session) {
          localStorage.setItem("woo-session", session);
        }
      }
    }

    return response;
  });
});

export const client = new ApolloClient({
  link: middleware.concat(
    afterware.concat(
      createHttpLink({
        uri: process.env.GATSBY_API_URL,
      })
    )
  ),
  cache: new InMemoryCache(),
});
