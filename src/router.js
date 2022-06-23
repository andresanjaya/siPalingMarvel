import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail'
import CoachesList from './pages/coaches/CoachesList'
import CoachRegistration from './pages/coaches/CoachRegistration'
import ContactCoach from './pages/requests/ContactCoach'
import RequestReceived from './pages/requests/RequestReceived'
import NotFound from './pages/NotFound'
import UserAuth from './pages/auth/UserAuth'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: 'coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            props: true,
            children: [
              { path: 'contact', component: ContactCoach } // /coaches/c1/contact
            ]
        },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: RequestReceived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound },
    ]
})

export default router;