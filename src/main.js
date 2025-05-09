import { createApp } from 'vue';
import './style.css';
import router from "./router";
import { Icon } from "@iconify/vue"
import App from './App.vue';

const app = createApp(App);
app.use(router)
app.component('Icon', Icon); // Register sebagai komponen global
app.mount('#app')