# 動態路由匹配

<br>

## 配置路由 index.js

* 建立文件 : /src/router/index.js

    ```js
    import Vue from 'vue'
    import Router from 'vue-router'

    import User from '@/components/User'
    import HomePage from '@/components/HomePage'

    Vue.use(Router)

    export default new Router({
        routes: [
            {
                path: '/',
                name: 'index',
                component: HomePage
            },

            {
                //  :id 意義是匹配所有 /user/** 路徑，** 的參數放入 $route.params.id 中，供 User component 使用。
                path: '/user/:id', 
                name: 'user',
                component: User
            }
        ]
    })
    ```


    <br>


## main.js 入口文件 :

* 修改文件 : src/main.js

    ```js
    import Vue from 'vue'
    import App from './App.vue'
    import router from '@/router/index'

    Vue.config.productionTip = false

    new Vue({
    router, // 導入路由配置
    render: h => h(App),
    }).$mount('#app')
    ```

<br>

## SPA 主視圖 :

* 修改文件 : src/App.vue

    App.vue 為主視圖渲染文件，必須要加入一個可以顯示 SPA route 切換的區塊。這個區塊就是 `<router-view></router-view>`。

    我們的路由切換的 components 都會在 `<router-view></router-view>` 區塊顯示。

    ```vue
    <template>
        <div id="app">
            <img alt="Vue logo" src="./assets/logo.png">
            <router-view></router-view>
        </div>
    </template>

    <script>
    export default {
        name: 'App',
    }
    </script>
    ```

    <br>

---

這樣一來就大功告成了 !!
