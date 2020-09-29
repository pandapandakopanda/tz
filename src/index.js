import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-client-preset'
import { InMemoryCache } from 'apollo-client-preset'
import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory() 

const token ='7a9dcc7616d6bb9baba15577cbd3d00387e22118'

const httpLink = {
  uri:'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${token}`
  }
}

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
})


const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
   </Router>
  </ApolloProvider>, 
  container
)
