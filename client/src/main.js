import Vue from 'vue'
import App from './App.vue'
import router from './router'

import SuiVue from 'semantic-ui-vue';

import VueChartJS from '@/views/statistics/StatisticsHome.vue'
/* ... */

Vue.use(SuiVue, VueChartJS)

import 'semantic-ui-css/semantic.css';

Vue.config.productionTip = false

// Aliasing createElement to h is a common
// convention in vue and is required in JSX React.

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
