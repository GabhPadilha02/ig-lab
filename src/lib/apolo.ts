import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6b70det0tro01unhhruc40i/master",
  cache: new InMemoryCache()
})  