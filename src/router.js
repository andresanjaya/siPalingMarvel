import { createRouter, createWebHistory } from 'vue-router';

import BookDetail from './pages/books/BookDetail.vue';
import BooksList from './pages/books/BooksList.vue';
import BookRegistration from './pages/books/BookRegistration.vue';
import RequestBook from './pages/requests/RequestBook.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/books', component: BooksList },
    {
      path: '/books/:id',
      component: BookDetail,
      props: true,
      children: [
        { path: 'borrow', component: RequestBook } // /books/c1/contact
      ]
    },
    { path: '/register', component: BookRegistration, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/books');
  } else {
    next();
  }
});

export default router;
