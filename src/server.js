import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";
import resolvers from "./resolvers/index.js";

const PORT = 3002;

const typeDefs = fs.readFileSync("./src/schema.gql", "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀 Server ready at ${url}`);
