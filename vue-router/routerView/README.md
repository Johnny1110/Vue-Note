# 命名 router-view

<br>

當一個 router 需要 1 個以上的 `<router-view>` 來呈現 router component 時。就需要幫 `<router-view>` 命名拉。

<br>

## 主要入口元件 App.vue

* 因為一般使用 vue-cli 都是以 App.vue 元件作為 SPA 基底，所以我們要做 router 的多個 component 的話就要設計一下這個主要基底 :

    ```html
    <template>
    <div id="app">
        <router-view></router-view>
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
    </div>
    </template>
    ```

    我們設計了 3 個 router-view，第一個沒命名的就是 default，其他兩個分別是 a 與 b。

    <br>

## Router 設定 index.js

* 直接看 code : 

    ```js
    import Vue from 'vue'
    import Router from 'vue-router'

    import HomePage from '@/components/HomePage'
    import AComponent from '@/components/AComponent'
    import BComponent from '@/components/BComponent'

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
        ]
    })
    ```

    <br>

    ---

    大功告成!~XD