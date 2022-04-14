import {createApp} from "vue";
import App from "./app/App";
import router from "./router";
import AppLayout from './app/layouts/AppLayout'

// Vue.config.productionTip = false;

const app = createApp(App)
app.use(router)
app.component('AppLayout', AppLayout)
app.mount("#app");
