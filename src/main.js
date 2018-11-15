// Import global stylesheets
import 'normalize.css';
import 'animate.css';
import '@/assets/styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Start Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
