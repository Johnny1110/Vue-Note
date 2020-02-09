# Router 導覽

vue 做導覽的方式有 4 種，這邊每一個都提出一部分做範例參考。

<br>

## `<router-link>`

* router-link 是直接以模板的方式嵌在 html 中。使用上也很簡單，其基底原理使用 router.push()

    ```html
    <div id='router-link'>
        <router-link to='/user/Johnny/shoppingcart'>router-link 購物車</router-link>
        <br>
        <router-link to='/user/Johnny/profile'>router-link 個人頁</router-link>
    </div>
    ```

<br>

## `router.push()`

* router.push() 會向 history 堆疊添加一筆新紀錄，當 user 按下 browser 的後退時，便會回到上一頁。

* 在 vue 內部要調用此方法可以使用 this.$router.push()

* 直接看 code (HomePage.vue): 

    ```html
    <template>
        <div>
            <h1>welcome to HomePage</h1>
            <label>輸入 username 之後，便可以路徑上帶你的名字訪問拉。</label>
            <input type="text" v-model="username"/>

            <br/>
            <hr/>
            
            <div id='router-push'>
                <button @click='pushToCart'>router.push() 購物車</button>
                <br>
                <button @click='pushToProfile'>router.push() 個人頁</button>
            </div>
        </div>
    </template>

    <script>
    export default {
        data(){
                return{
                    username: ''
                }
            },

        methods: {
            pushToCart(){
                var path = `/user/${this.username}/shoppingcart`
                this.$router.push(path)
            },

            pushToProfile(){
                var path = `/user/${this.username}/profile`
                this.$router.push({
                    path: path,
                    query:{ // 也可以帶訪問?參數
                        domain: 'frizo',
                        author: 'Johnny'
                    }
                })
            }
        }
    }
    </script>
    ```

    <br>

## `router.replace()`

* replace 跟 push 很像，唯一不同是，replace 不會向 history 堆疊添加紀錄，而是直接取代當前紀錄。

* 在 router-link 中使用方法 : `<router-link to="/#" replace>`

* 用法跟 push 一樣，這邊就不多做詳述。

<br>

## `router.go()`

* 使用方法 : `router.go(number)`，go() 需要傳入一個自然整數字，

* 看 code : 

    ```js
    router.go(10) // history 往前進 10 頁

    router.go(-10) // history 往後退 10 頁

    // 如果 history 不夠，會自動失效。
    ```

    