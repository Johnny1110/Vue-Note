# 正式進入模組化

<br>

好的，終於來到模組化了，Vuex 的部分也差不多進入尾聲了。那我們話不多說，值接開始。

<br>

---

<br>

## 什麼是模組化

首先我們要搞清楚什麼是模組化，為什麼需要模組化。我們以開發中遇到的問題為例 :

<br>

* 我們的專案有 3 個模快需要用到 Vuex，分別為 __"購物車系統"__、__"會員資料系統"__、__"訂單系統"__，試想一下，今天有 3 個這樣的模快需要建立 state、mutations、getters、actions。或許你會說還好啦，我在一個檔案中很好的管控我的 code，不會亂掉。那麼如果今天有 10 個模快呢 ? 20 個呢 ?

<br>

* 遇到上面敘述的問題，顯然我們上一個章節的切割 Store 的做法已經無法滿足我們的需求了，這個時候就需要使用到模組化了。

<br>

* 當我們使用了 Vuex 模組化，我們就可以把各個不同的系統需要的 Vuex 配置文件分類到不同的資料夾中，而且彼此之間也可以呼叫對方模組的方法使用。更方便我們對 code 的管控，以及釐清整個專案架構。

<br>
<br>
<br>
<br>

## 配置 VUEX 模組

* 假設我們目前的需求只有 2 個模組，一個是 __"購物車系統"__ 另一個是 __"會員資料系統"__。以下是在同一個文件中呈現配置關係 :

    src/store/index.js:

    ```js
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    const shoppingCart = {
        state: {},
        mutations: {},
        actions: {},
        getters: {}
    }

    const member = {
        state: {},
        mutations: {},
        actions: {},
        getters: {}
    }

    export default new Vuex.Store({
        modules: {
            shoppingCart: shoppingCart,
            member: member
        }
    });
    ```

    其實這樣我們已經配置好模組了，只是並沒有拆分文件而已。由於章節篇幅問題，切分文件留到下一篇再講。

    現在就讓我們慢慢來再這一份文件中配置我們的模組吧 ! 

<br>
<br>

* __ShoppingCart__ 模組

    我們的 shoppingCart 以最簡為例，只需要陣列形式來保存 __產品編號（itemId）__、__數量（count）__、__單價（price）__即可。