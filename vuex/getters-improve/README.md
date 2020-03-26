# 更好的設計與使用 getters

<br>

一般來說，我們可以直接使用 `mapGetters` 來取用 getters。直接切入主題，實際使用一下。

<br>

## 使用 `mapGetters`

* 延續前面一個章節定義的 Store.getters，我們重構一下 TestStore.vue。

    編輯 src/views/TestStore.vue 如下 :

    ```html
    <template>
        <div>
            <h1>Test Store Page</h1>
            <div>
                {{userName}}
                {{userAge}}
                {{userAddr}}
            </div>
            <div>{{fullUserInfo}}</div>
            <div>{{getSkillsById(1)}}</div>
        </div>
    </template>

    <script>
        import {mapGetters} from 'vuex'

        export default {
            computed: {
                ...mapGetters([
                    "userName",
                    "userAge",
                    "userAddr",
                    "fullUserInfo",
                    "getSkillsById"
                ])
            }
        }
    </script>
    ```

    畫面效果與上一章節呈現的效果一至，主要就是節省了一個一個 getter 重複聲明的步驟。

    <br>

    也可以像如下的方式來為 getters 重新賦予命名 : 

    ```js
    computed: {
        ...mapGetters({
            name: "userName",
            age: "userAge",
            addr: "userAddr",
            fullInfo: "fullUserInfo",
            skill: "getSkillsById"
            })
        }
    ```