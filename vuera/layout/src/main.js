import { createApp, defineAsyncComponent } from "vue";
import Layout from "./Layout.vue";

const app = createApp(Layout);
console.log('xxx-app');
app.mount("#app");
