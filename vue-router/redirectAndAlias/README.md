# 路由 redirect 與 alias

<br>

## Redirect

```js
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path: '/a',
            redirect: '/b' // 直接 url 重導向
        },

        {
            path: '/c',
            redirect: {name: 'foo'} // 用 router name 重導向
        },

        {
            path: '/d',
            reirect: to => { // 寫 func 判斷
                if (2 > 1){
                    return '/b';
                }else{
                    return '/c';
                }
            }
        }

    ]
});
```

<br>

## Alias

```js
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path: '/a',
            component: AComponent,
            alias: '/aComponent'
        }
    ]
});
```

當 user 在瀏覽器上輸入 /aComponent 時，url 上路徑保持不變，但實際上訪問的是 '/a'