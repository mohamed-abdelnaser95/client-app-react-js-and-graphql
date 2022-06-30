import React from 'react'
import { 
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
} from '@apollo/client' 
import { onError } from '@apollo/client/link/error' // this is used to catch error

const errorLink = onError (({ graphqlErrors, networkError})=> {
    if(graphqlErrors){
        graphqlErrors.map(({ message, location, path}) => {
            console.log("graphql error " + message)
            return"";
        })
    }
})

const link = from([
    errorLink,
    new HttpLink({uri: "http://localhost:4000/graphql"})
])

const client = new ApolloClient({
    cache : new InMemoryCache(),
    link: link
})

function ApolloSetup({ children }) {
    return (
        <ApolloProvider client={client}>
            { children }
        </ApolloProvider>
    )
}

export default ApolloSetup