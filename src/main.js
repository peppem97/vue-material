import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from "@/store";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

loadFonts()

createApp(App).use(router).use(store).use(vuetify).mount('#app')
