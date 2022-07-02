import { createStore } from 'vuex';

import booksModule from './modules/books/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    books: booksModule,
    requests: requestsModule,
    auth: authModule
  }
});

export default store;