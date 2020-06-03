# 更好的設計與使用 mutations

<br>

上一個章節我們提到如何設定與使用 mutations，本章再來補充一下關於 mutations 的進階設計與使用細節。

話不多說，直接切入主題。

<br>

## 使用 payload 的方式提交 commit

* 上一章提到提交 commit 時，我們只提交了一個 `newMsg`，如果遇到要提交很多資訊時，func 的參數介面設計就變得很複雜。所以我們可以用一個 payload 來當作參數傳遞 : 

    註冊 setUserInfo 到 mutations :

    ```js
    mutations: {
        setUserInfo: (state, userInfo) => {
            state.name = userInfo.name;
            state.age = userInfo.age;
            state.addr = userInfo.addr
        }
    }
    ```

    使用 setUserInfo : 

    ```js
    const userInfo = {
        name = "Johnny";
        age = "21";
        addr = "Taipei, Daan District.";
    };
    
    this.$store.commit("setUserInfo", userInfo);
    ```

<br>
<br>

## 使用常量替代 Mutation 事件的 type

* 想像一下，像上面的方式註冊以及使用 mutation handler，當專案規模變大之後，我們要改一下 `setUserInfo` 這個 mutation handler type，那所有 Components 是不是都要跟著改呀 ?

* 所以有沒有更好的方式來管理 mutation handler type 的命名呢 ? 這邊有一個方法，就是使用常量來替代。

* 首先，我們建立檔案 src/store/mutation-types.js 如下 : 

    ```js
    // mutation-types.js
    export const CHANGE_MSG = 'changeMsg';
    ```

    <br>

* 再來我們修改一下 src/store/index.js 如下 : 

    ```js
    import Vue from "vue";
    import Vuex from "vuex";
    import * as types from "./mutation-types"  // mark-1

    Vue.use(Vuex);

    export default new Vuex.Store({
        state: {
            msg: 'Hello World'
        },
        mutations: {
            // mark-2
            [types.CHANGE_MSG] : (state, newMsg) => {
                state.msg = newMsg
            }
        },
    });
    ```

    __mark-1__ 處我們將宣告的所有 mutation-types 常量 import 進來，__mark-2__ 的地方使用 ES2015 的計算屬性命名功能來使用一个常量作为函式名稱。

    <br>

* 最後就是如何了使用，很簡單，這邊直接看 code 就可以了，不解釋 : 

    ```js
    import * as types from "../store/mutation-types"

    ...

    this.$store.commit(types.CHANGE_MSG, "newMsg")
    ```

<br>
<br>

## 使用 mapMutations

* 當我們在一個 Component 裡面大量的使用到 Vuex 的 Mutations 時，不免要定義很多方法如下 :

    ```js
    methods: {
        commitA(){
            this.$store.commit("a")
        },

        commitB(){
            this.$store.commit("b")
        },

        commitC(){
            this.$store.commit("c")
        },
    }
    ```

    其實有一個不錯的方法可以避免這樣大費周章的宣告 func，尤其是方法只是單純的提交 commit。

    <br>

* 使用 mapMutations 就可以幫我們省掉不必要的方法宣告步驟 : 

    編輯 src/views/TestStore.vue 如下 : 

    ```html
    <template>
        <div>
            <h1>Test Store Page</h1>

            <label>MSG: </label>
            <p>{{msg}}</p>

            <label>Input MSG: </label>
            <input type="text" v-model="newMsg">
            <button @click="changeMsg(newMsg)">commit</button>
        </div>
    </template>

    <script>
        import {mapMutations} from 'vuex'

        export default {
            data() {
                return{
                    newMsg: ''
                }
            },

            methods: {
                ...mapMutations([
                    "changeMsg"
                ])
            },
            computed: {
                msg(){
                    return this.$store.state.msg
                }
            }
        }
    </script>
    ```

    要注意一些地方 : 

    * `import {mapMutations} from 'vuex'` 先把 mapMutations import 進組件中。

    * 在 methods 區塊中以輔助函式的方式將 store 中的 mutations 映射到局部計算屬性：

        ```js
        ...mapMutations([
                "changeMsg",
            ])
        ```

    * 最後在 `<template>` 中定義 `<button>` onclick 時觸發 `changeMsg()` 方法。

<br>

* 如果不想直接以 mutations type 當作方法名稱，也可以這樣定義 : 

    ```js
    ...mapMutations({
        commitMsg: "changeMsg",
    })
    ```

    這樣就可以使用 `commitMsg()` 來代替 `changeMsg()` 了。 


