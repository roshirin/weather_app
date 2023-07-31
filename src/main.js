import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from 'vue-i18n';
import { messages } from '@/helpers'

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');

export default i18n;
