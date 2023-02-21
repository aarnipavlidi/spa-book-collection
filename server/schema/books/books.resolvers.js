import currentBooksData from "../../utils/mockData.js";

const resolvers = {
  Query: {
    getCurrentBooks: async () => {
      try {
        const getCurrentBooksCollection = currentBooksData;
        console.log(getCurrentBooksCollection)
        return getCurrentBooksCollection;
      } catch (error) {
        throw error;
      }
    }
  }
}

export default resolvers;