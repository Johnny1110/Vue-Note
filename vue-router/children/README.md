# 嵌套路由 （children components）

<br>



## 嵌套路由的應用直接舉例說明 :

* 假如有一個購物系統，user 相關資料 api 長大概這樣 :

    * url : https://www.frizo.com/user/Johnny1110/shoppingcart  我的購物車

    * url : https://www.frizo.com/user/Johnny1110/profile  我的個人頁

    * url : https://www.frizo.com/user/Johnny1110/history  我的瀏覽紀錄

    這樣一套 url 都是以 /user/** 開頭，一看就知道適用於[動態路由匹配章節](..\routerMatch\README.md)中提到的 path 定義 /user/:id 

    <br>

* 但是可以看到 /user/:id 後面還要接 shoppingcart丶profile丶history 等子路徑，所以就是該介紹本章重點 <strong>嵌套路由</strong> 了。


<br>

## 實作

* 修改文件 src/router/index.js :

    ```js
    import ShoppingCart from '@/components/ShoppingCart'
    import Profile from '@/components/Profile'

    Vue.use(Router)

    export default new Router({
        routes: [
            {
                path: '/',
                name: 'index',
                component: HomePage
            },

            {
                path: '/user/:id',
                component: User,
                children: [ // 加入 2 個嵌套路徑
                    {
                        path: 'shoppingcart',
                        component: ShoppingCart
                    },

                    {
                        path: 'profile',
                        component: Profile
                    },
                ]
            }
        ]
    })
    ```

    <br>

* 修改文件 User.vue : 

    ```html
    <template>
        <div>
            <h1>User Interface</h1>
            <h3>hello {{$route.params.id}}</h3>
            <!-- router-view 提供子路徑 component 顯示 -->
            <router-view></router-view> 
        </div>
    </template>
    ```

    <br>

* Profile.vue 與 ShoppingCart.vue 略。

    <br>

* 現在可以啟動 server 輸入以下路徑測試看看 : 

    http://localhost:8080/#/user/Johnny/shoppingcart

    http://localhost:8080/#/user/Johnny/profile