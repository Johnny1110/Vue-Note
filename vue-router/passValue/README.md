# 路由 Component 傳遞參數

<br>

前面有提到過，vue-router 傳遞 path 參數時可以使用 $router.params，但是如此一來會與 url 形成高度耦合，所以我們可以使用另一種方式傳遞參數。

<br>

## 修改文件 src/router/index.js : 

```js
routes: [
    {
        path: '/userProps/:id',
        component: UserProps,
        props: true
    }
]
```

<br>

## 新增文件 src/components/UserProps.vue :

```html
<template>
  <div>
      <h3>UserProps 組件，你的 username 是 {{username}}</h3>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            username: this.id
        }
    }
}
</script>
```

這邊 UserProps 組件使用 props 接受傳遞來的屬性值。在 data() 區塊轉換成 username 後顯示於視圖上。