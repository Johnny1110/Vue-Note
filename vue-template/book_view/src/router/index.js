import Vue from 'vue'
import Router from 'vue-router'
import ShowText from '@/components/ShowText'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowText',
      component: ShowText
    }
  ]
})
