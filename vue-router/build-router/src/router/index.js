import Vue from 'vue'
import Router from 'vue-router'

import User from '@/components/User'
import HomePage from '@/components/HomePage'
import ShoppingCart from '@/components/ShoppingCart'
import Profile from '@/components/Profile'
import AComponent from '@/components/AComponent'
import BComponent from '@/components/BComponent'
import UserProps from '@/components/UserProps'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                default: HomePage,
                a: AComponent,
                b: BComponent,
            }
        },

        {
            path: '/user/:id',
            component: User,
            name: 'user',
            children: [
                {
                    path: 'shoppingcart',
                    component: ShoppingCart
                },

                {
                    path: 'profile',
                    component: Profile
                },
            ]
        },

        {
            path: '/userProps/:id',
            component: UserProps,
            props: true
        }

    ]
})