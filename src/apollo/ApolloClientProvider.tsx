import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

export const ApolloClientProvider: React.FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
