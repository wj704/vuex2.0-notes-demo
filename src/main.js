import Vue from 'vue';
import App from './App';
import Home from './components/Home';
import TimeEntries from './components/TimeEntries.vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './vuex/index';


// 路由模块和HTTP模块
Vue.use(VueResource);
Vue.use(VueRouter);

 const routes = [
  { path: '/home', component: Home },
  {
    path : '/time-entries',
    component : TimeEntries,
    children : [{
      path : 'log-time',
      // 懒加载
      component : resolve => require(['./components/LogTime.vue'],resolve),
    }]
  },
  { path: '*', component: Home }
]
const router = new VueRouter({
      routes // short for routes: routes
});
// router.start(App, '#app');
const app = new Vue({
      router,
      store,
       ...App,
}).$mount('#app');