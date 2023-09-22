import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {resolvers} from "./resolvers/index.js"
import {typeDefs} from "./types/index.js"
import {makeExecutableSchema} from "@graphql-tools/schema";
import {BooksApi} from "./api/BooksApi.js";
import { UserApi } from "./api/UserApi.js";

const schema = makeExecutableSchema({typeDefs, resolvers});

const server = new ApolloServer({schema});

const { url } = await startStandaloneServer(server, 
    {
        listen: {
            port: 4000
        }, 
        context: async () => {
            const {cache} =  server;
            return {
                apis: {
                    bookApi: new BooksApi({cache}),
                    userApi: new UserApi({cache}),
                },
            };
        },
    },
);

console.log(`🚀  Server ready at: ${url}`);