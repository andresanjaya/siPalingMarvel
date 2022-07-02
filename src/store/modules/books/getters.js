export default {
  books(state) {
    return state.books;
  },
  hasBooks(state) {
    return state.books && state.books.length > 0;
  },
  isBooks(_, getters, _2, rootGetters) {
    const books = getters.books;
    const userId = rootGetters.userId;
    return books.some(book => book.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};