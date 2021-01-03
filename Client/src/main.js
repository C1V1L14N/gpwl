import Vue from 'vue';
import App from './App.vue';
import VueDraggable from 'vue-draggable';
// import VueFeatherIcon from "vue-feather-icon";
import movable from 'v-movable';
import VTooltip from 'v-tooltip';

Vue.config.productionTip = false;

Vue.use(VueDraggable);
// Vue.use(VueFeatherIcon);
Vue.use(movable);
Vue.use(VTooltip);

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
