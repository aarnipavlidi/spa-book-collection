import currentBooksData from "../../utils/mockData.js";

const resolvers = {
  Query: {
    getCurrentBooks: async () => {
      try {
        const getCurrentBooksCollection = currentBooksData;

        if (!getCurrentBooksCollection) {
          throw new Error('There was an issue loading books from collection. Please try again later!')
        }

        if (getCurrentBooksCollection.length === 0) {
          throw new Error('There are currently no books available. Please add book into collection!')
        }

        return getCurrentBooksCollection;
      } catch (error) {
        throw error;
      }
    },
    getBookByID: async (_, { id }) => {
      try {
        const getBookByID = currentBooksData.find((book) => book.id === id);

        if (!getBookByID) {
          throw new Error('There was an issue finding chosen book. Please try again later!');
        }

        return getBookByID;
      } catch (error) {
        throw error
      };
    }
  }
}

export default resolvers;