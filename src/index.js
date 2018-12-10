import React from "react";
import ReactDOM from "react-dom";
// import { createHttpLink } from 'apollo-link-http'
// import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

import { configureStore } from "./App/store";
import "./App/styles/index.css";
import Root from "./App/components/Root";

const configLink = {
  uri: `/graphql`,
  credentials: "include"
};

const link = new BatchHttpLink(configLink);

const graphqlClient = new ApolloClient({
  // link: ApolloLink.from([createHttpLink(configLink)]),
  link,
  cache: new InMemoryCache()
});

const store = configureStore();

ReactDOM.render(
  <Root store={store} graphqlClient={graphqlClient} />,
  document.getElementById("root")
);
