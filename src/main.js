//import Vue from 'vue'
//import App from './App.vue'
//import store from './store'
const Vue = require('vue')
const App = require('./App.vue')
const store = require('./store')
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')