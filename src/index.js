import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux'

import App from "./App";

const client = new ApolloClient({
  uri: 'https://bff-meli-cl.herokuapp.com/',
  cache: new InMemoryCache(),
});



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>,
  </React.StrictMode>,
  rootElement
);
