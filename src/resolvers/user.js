const user = {
  Query: {
    getUser: (args) => {
      return {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
      };
    },
  },
  Mutation: {
    createUser: (args) => {
      return true;
    },
  },
};

export default user;
