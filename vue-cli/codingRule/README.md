# 編寫規則介紹

<br>

其實會寫 vue 就基本會用 vue-cli 了，vue-cli 無非就是方便開發者編寫應用而已，不一定就要用 vue-cli 開發 vue 應用，但是使用 vue-cli 開發可以事半功倍。

這邊就簡單介紹一下 vue-cli 的編寫規則，前提是要已經有一點 vue 基礎才看得懂。

<br>

---

<br>

## 入口文件 src/main.js 和 index.html

<br>

會寫 vue 的人應該都清楚，編寫一個簡單的 vue 頁面的結構大概是如何的，這邊簡單示範 :

* hello.html :

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>

    <body>
        <div id="app">
            <h1>{{message}}</h1>
        </div>
    </body>

    <script>
        new Vue({
            el: '#app',
            data: {message: 'hello world'}
        })
    </script>
    </html>
    ```

    用 CDN 的方式載入 vue.js，實例化 Vue 物件綁定到`id="app"` 的元件。

    <br>

一個 Vue SPA 應用，基本上都是靠 vue-router 在一個單一頁面做不同的 vue component 切換。就拿這個 hello.html 舉例，整個應用也就只有這一個 .html 文件，剩下所有視圖與 model 處理都是靠下方的 `<script>` 中的 Vue 物件處理。在 vue-cli 中，預設的這個單一頁就是 <strong>index.html</strong>，而 script 部分則分離出來單獨寫在 <strong>main.js</strong> 中。

看一個基本的 main.js 範例 :

* main.js

    ```js
    import Vue from 'vue'
    import App from './App'
    import router from './router'

    Vue.config.productionTip = false

    new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
    })
    ```

    <br>

在實際 build 出生產環境時，dist/ 資料夾會輸出一個 index.html 作為單頁應用的 html 載體以及幾個 .js 文件，這些文件其實就是 vue-cli 幫你把 main.js 以及一坨拉古的 .vue 或 .js 包好後一起導入到單頁中。


<br>

---

<br>

## .vue 文件介紹

<br>

不使用 vue-cli 寫一個帶有 component 的 Vue 應用 : 

* counter.html

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ...
    </head>

    <body>

        <div id="app" class="container">
            <div class="row">
                <div class="col-md-6">
                    <!-- counter component -->
                    <counter></counter> 
                </div>
            </div>
            
        </div>

        <!-- counter component 的 template 掛載點 -->
        <template id="counterUI">
            <div class="text-center">
                <div class="alert alert-primary" role="alert">
                    {{currentValue}}
                </div>
                <button type="button" class="btn btn-success" @click="increase"><i class="fas fa-plus"></i></button>
                <button type="button" class="btn btn-danger"@click="decrease"><i class="fas fa-minus"></i></button>
            </div>
        </template>
        <!-- counter component 的 template 掛載點 -->

    </body>

    <script type="text/javascript">
        Vue.component('counter', {
            template: '#counterUI',
            data(){
                return{
                    currentValue: 0
                }
            },
            methods: {
                increase(){
                    this.currentValue++
                },
                decrease(){
                    this.currentValue--
                }
            }
        })

        new Vue({
            el: "#app",
        })
    </script>
    </html>
    ```

    <br>

在不使用 vue-cli 之前，寫一個 component 真的很麻煩，compoent 要有 template 區塊，還要定義自己的方法。跟 main.js 擠在一起又太亂，分離出去變成單獨 .js 檔的話， template 寫在 js 裡 IDE 又沒有很好的格式支援，所以就有的 vue-cli 專用的文件格式 : .vue

這邊用 .vue 寫一個 component 來看看 : 

* Counter.vue

    ```html
    <template>
    <div class="text-center">
        <div class="alert alert-primary" role="alert">{{currentValue}}</div>

        <button type="button" class="btn btn-success" @click="increase">
        <i class="fas fa-plus">+</i>
        </button>

        <button type="button" class="btn btn-danger" @click="decrease">
        <i class="fas fa-minus">-</i>
        </button>
    </div>
    </template>

    <script>
    export default {
    data () {
        return {
        currentValue: 0
        }
    },

    methods: {
        increase () {
        this.currentValue++
        },

        decrease () {
        this.currentValue--
        }
    }
    }
    </script>

    <style>
    /* 自定義 css 樣式 */
    </style>
    ```

<strong>注意 ! </strong> :　`<template>` 下一定只可以有一個主要 `<div>` tag，不可以有 2 個。

<br>

這樣一來，在其他任何 .vue 文件中就可以隨意重複使用了，例如在主要 app 的 component（App.vue） 中可以像這樣使用 : 

* App.vue

    ```html
    <template>
    <div id="app">
        <show-text/>
    </div>
    </template>

    <script>
    import ShowText from '@/components/ShowText'

    export default {
    name: 'App',
    components: {
        ShowText,
      }
    }
    </script>
    ```

