export default {
  registerBook(state, payload) {
    state.books.push(payload);
  },
  setBooks(state, payload) {
    state.books = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};