import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  var authorized = true
  if(authorized){
    next()
  }else{
    next('/')
  }
})
