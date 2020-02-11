# 保護 router （安全性）

<br>

這篇筆記要說的東西很簡單，就是如何使用 vue.js 保護網站資源(頁面)。說白了，就是對 router 進行驗證，符合條件才放行。這邊簡稱就叫 <strong>守衛</strong> 好了。

vue.js 的守衛一共有 3 大類的守衛，分別是 : 

* [全域的守衛](#1) （設置好後，所有 router 都被其控制）

* [Router 的獨享守衛](#2)　（僅對其所屬的 router 負責）

* [Component 內置守衛](#3) （在 component 內設定）

<br>

---

<br>

<div id="1">

## 全域的守衛

* 針對一整個 router 設定，在 main.js 中修改如下 : 
    
    ```js
    import Vue from 'vue'
    import App from './App.vue'
    import router from '@/router/index'

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
    ```

    參數介紹 :

    * `to` （Router 物件）: 即將要進入的 router 對象

    * `from` （Router 物件） : 當前正要離開的 router 對象

    * `next` （Function）: 調用該方法讓守衛放行。具體效果根據給入參數而不同。

        * `next()`　放行給下一個守衛

        * `next(flase)`　中斷當前導覽

        * `next('/')`　跳到　'/ '

        * `next(error)`　傳入一個　Error 物件，導覽會終止，並把參數傳給 router.onError() 註冊過的 callback。

    <br>

* 同時全域守衛也還有後置版的，在載入後執行某些邏輯時可以用到 :

    ```js
    router.afterEach((to, from) => {
            // TODO
        })
    ```


<br>

---

<br>

<div id="2">

## Router 的獨享守衛

* 在 router 設定時直接定義 beforeEnter 守衛，修改 src/router/index.js :

    ```js
    import Vue from 'vue'
    import Router from 'vue-router'

    Vue.use(Router)

    export default new Router({
        routes: [
            {
                path: '/',
                name: 'index',
                component: HomePage,
                beforeEnter: (to, from, next) => {
                    // define authorized logic.
                }
            },
        ]
    })
    ```

    這邊的三個參數 `(to, from, next)` 跟全域守衛作用一致。



<br>

---

<br>

<div id="3">

## Component 內置守衛

* 可以在 Component 中定義守衛，Component 可內置守衛共有 3 個 : 

    * `beforeRouteEnter(to, from, next)`

    * `beforeRouteUpdate(to, from, next)`

    * `beforeRouteLeave(to, from, next)`

    <br>

* 這邊直接示範修改 src/components/PrivatePage.vue : 

    ```html
    <template>
        <div>
            <h1>hello ! this is private page !</h1>
        </div>
    </template>

    <script>
    export default {
        beforeRouteEnter(to, from, next) {
            var authorized = true;
            if (authorized){
                next();
            }else{
                next('/');
            }
        }
    }
    </script>
    ```

    這樣就可以達到 Component 內置守衛了。

    <br>

* 最後來具體看一下，Component 內置守衛的一些特性 （翻譯自官方文件）: 

    ```js
    beforeRouteEnter (to, from, next) {
        // 在　Router 渲染這個 Component 前會被執行。
        // 無法使用 'this' 取用這個 Component 物件，因為還 Component 還沒被建立。
        // PS : 但是還是有方法可以存取 Component 物件屬性的，這個待會再說。
    },

    beforeRouteUpdate (to, from, next) {
        // 渲染此 component 的 Router 更改時調用, 但是此 component 會被新的 Router 重新使用。
        // 比如說 : 有一個動態路由定義為 '/foo/:id'，當我們的導覽從 `/foo/1` 到 `/foo/2` 時，
        // 同樣的 Foo component 物件將被重新使用，並且這個守衛將在此時被呼叫執行。
        // 可以使用 'this' 取用 component 物件。
    },

    beforeRouteLeave (to, from, next) {
        // 渲染此 component 的 Router 離開時調用。
        // 可以使用 'this' 取用 component 物件。
    }
    ```

    <br>

* 如何在 `beforeRouteEnter (to, from, next)` 存取 Component 物件屬性 ?

    可以像以下 `#` 註解處這樣使用箭頭函式 :

    ```html
    <template>
        <div>...</div>
    </template>

    <script>
        export default {
            data(){
                return{
                    name: 'Johnny Wang'
                }
            },

            beforeRouteEnter(to, from, next) {
            //-- ################### --//
                next(vm => { 
                    vm.name = "Guava"
                })
            //-- ################## --//
            }
        }
    </script>
    ```

    <br>

* 何時應用 `beforeRouteLeave (to, from, next)` 呢 ?

    官方給出的範例 :

    ```js
    beforeRouteLeave (to, from, next) {
        const answer = window.confirm('確認離開嗎? 資料還未保存喔!')
        if(answer) {
            next()
        }else {
            next(false)
        }
    }
    ```



