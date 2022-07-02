import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.css'

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard1 from './components/ui/cards/BaseCard1.vue';
import BaseCard2 from './components/ui/cards/BaseCard2.vue';
import BaseCard3 from './components/ui/cards/BaseCard3.vue';
import BaseCard4 from './components/ui/cards/BaseCard4.vue';
import BaseButton1 from './components/ui/buttons/BaseButton1.vue';
import BaseButton2 from './components/ui/buttons/BaseButton2.vue';
import BaseButton3 from './components/ui/buttons/BaseButton3.vue';
import BaseButton4 from './components/ui/buttons/BaseButton4.vue';
import BaseBadge1 from './components/ui/badges/BaseBadge1.vue';
import BaseBadge2 from './components/ui/badges/BaseBadge2.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card1', BaseCard1);
app.component('base-card2', BaseCard2);
app.component('base-card3', BaseCard3);
app.component('base-card4', BaseCard4);
app.component('base-button1', BaseButton1);
app.component('base-button2', BaseButton2);
app.component('base-button3', BaseButton3);
app.component('base-button4', BaseButton4);
app.component('base-badge1', BaseBadge1);
app.component('base-badge2', BaseBadge2);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js'
