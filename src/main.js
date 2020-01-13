import App from "./App.vue";
import Clipboard from "v-clipboard";
import { OvermindPlugin } from "./overmind";
import Vue from "vue";

Vue.use(OvermindPlugin);

Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
