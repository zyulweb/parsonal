import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//1.完整引入mint-ui
import MintUI from "mint-ui"

//2.单引引入mint-ui样式
import'mint-ui/lib/style.css'

import axios from './axios'

import { Swipe, SwipeItem } from 'mint-ui';

//3.将mint-ui注册vue
Vue.use(MintUI);

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
