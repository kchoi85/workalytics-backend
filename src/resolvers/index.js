import user from "./user.js";

const resolvers = {
  Query: {
    ...user.Query,
  },
  Mutation: {
    ...user.Mutation,
  },
};

export default resolvers;
