// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill();

// load jQuery
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.config.productionTip = false

// ----- Initialize Vuex Store -----
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    menuType: ''
  },
  mutations: {
    setMenuType(state, menuType){
      state.menuType = menuType;
    }
  }
})

// ----- Initialize App -----
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
