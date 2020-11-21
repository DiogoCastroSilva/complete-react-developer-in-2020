import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Graph QL
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { resolvers, typeDefs } from './grapql/resolvers';
import data from './grapql/initial-data';

import './index.css';
import { default as App } from './App/App.container';


const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
});

// Like redux saves data locally
client.writeData({ data });


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
