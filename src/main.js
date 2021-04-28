import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import moment from 'moment';


Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if(value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
