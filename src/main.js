import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
import Routes from './routes'
import App from './App.vue';

require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

var infiniteScroll =  require('vue-infinite-scroll');

Vue.use(infiniteScroll);
Vue.use(VueOnsen);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
})
new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App },
  router: router
});
