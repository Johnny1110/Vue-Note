# 保護 router （安全性）

<br>

這篇筆記要說的東西很簡單，就是如何使用 vue.js 保護網站資源(頁面)。說白了，就是對 router 進行驗證，符合條件才放行。這邊簡稱就叫 <strong>守衛</strong> 好了。

vue.js 的守衛一共有 3 大類的守衛，分別是 : 

* 全域的守衛 （設置好後，所有 router 都被其控制）

* router 的獨享守衛　（僅對其所屬的 router 負責）

* component 內的守衛 （在 component 內設定）

<br>

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

        * next( )　放行給下一個守衛

        * next(flase)　中斷當前導覽

        * next('/')　跳到　'/ '

        * next(error)　傳入一個　Error 物件，導覽會終止，並把參數傳給 router.onError() 註冊過的 callback。

