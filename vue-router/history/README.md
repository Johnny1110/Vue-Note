# 路由 history 模式

<br>

一般做 SPA 的時候，太容易從 url 就能看得出端倪，例如 : http://localhost:8080/#/hello 。加一個 # 字號太突兀了。

所以 vue.js 有一個 router history 模式，開啟之後就可以讓 url 去掉該死的 # 字號。

```js
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            components: Hello
        }
    ]
})
```

這樣在開啟 webpack 的時候就可以看到正常的 url 了。

<strong>但是 ! 如果是 build 到生產環境中，如果後端不支援 SPA 的這種 router mode 會返回 404。後端的解決方法就是做好預設 404 page，導到 index.html。在我的 Spring Note 裡面有記錄 Spring Boot 的解決方法</strong>

