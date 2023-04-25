import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify'
import router from './router/index';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import 'vuetify/styles';
import './axios';
import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
})
app.use(pinia);
app.use(router);
// app.use(vuetify);

app.mount('#app');
