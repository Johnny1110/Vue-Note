# 模板標籤指令 : if、bind、on、for

<br>

關於模板指令，這邊介紹最常用的 3 個 : `if、bind、on、for`。這些控制指令寫在標籤屬性內，前面都要加上 `v-`，像是 `v-if`。這邊範例所寫的 tags 都是作用在元件 tamplate 中，所以就不再重複寫不必要部份。

<br>

## v-if :

* data : display 是一個 boolean
    ```html
    <div v-if="display"> 你看到我喽 ! </div>
    ```

<br>

## v-bind :

* v-bind 可以把 data 綁定到 tag 的屬性上

    ```html
    <div v-bind:id="tagId">我的 id 屬性被綁定成 'tagId' 了</div>
    ```
* v-bind 因為太常用了，所以 vue 開發者幫它做了一個快捷使用方法，直接使用 `:` 符號

    ```html
    <div :id="tagId">我的 id 屬性被綁定成 'tagId' 了</div>
    ```

<br>

## v-on : 

* v-on 用於監聽 DOM 事件，比如 click 事件，submit 事件，scroll (捲動)事件，keyup (按鍵)事件。

    <br>

* click 事件 : 

    ```html
    <template>
        <div>
            <button v-on:click="logger('我被按了')">按鈕</button>
        </div>
    </template>

    <script>
    export default {
        methods: {
            logger(msg){
                console.log(msg)
            }
        }
    };
    </script>
    ```
    <br>

    `v-on:click` 因為太常用，所以也有快捷用法，直接用 `@click`
    ```html
    <button @click="logger('我被按了')">按鈕</button>
    ```
    <br>

    有時也需要存取 DOM events，我們可以在 click 傳遞參數時，多加一個 `$event` 參數。

    ```html
    <template>
    <div>
        <a href="https://www.google.com"
        v-on:click="logger('我被按了', $event)">
            被取消預設效果的超連結 tag
        </a>
    </div>
    </template>

    <script>
    export default {
    methods: {
        logger(msg, event){
        event.preventDefault() // 取消這個 dom 事件預設效果。
        console.log(event)
        }
      }
    };
    </script>
    ```
    實際跑跑看可以看到使用了 `event.preventDefault()` 之後，`<a>` 並不會做它預設的跳轉到 www.google.com 動作。

    <br>

    event 事件可以有許多的方法可用，例如如下 6 樣 : 

    * `.stop`
    * `.prevent`
    * `.capture`
    * `.self`
    * `.once`
    * `.passive` （passive　比較特別，放到後面 scroll 做講解）

    這幾樣方法其實也不必要傳遞 `$event` 到 func 內再呼叫，可以直接再 `v-on:click` 後面使用 :

    ```html
    <!-- click 事件的傳遞將被停止 -->
    <a v-on:click.stop="doThis"></a>

    <!-- submit 事件不再重整此頁 -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 修飾符們可以像這樣連接使用 (流暢寫法) -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- 單純只是取消預設功能也可以 -->
    <form v-on:submit.prevent></form>

    <!-- 假如這個 tag 內部有一個案紐被按，這個 tag 的 on 會被先處裡，才輪到裡面的按紐 -->
    <div v-on:click.capture="doThis">...</div>

    <!-- 只有 event.target 是 tag 本身時才會處理 on  -->
    <div v-on:click.self="doThat">...</div>

    <!-- 這個標籤最多被按 1 次 -->
    <a v-on:click.once="doThis"></a>

    <!-- 滑鼠鍵 -->
    <button @click.right.prevent="logger('右鍵被按')">...</button>
    <button @click.left.prevent="logger('左鍵被按')">...</button>
    <button @click.middle.prevent="logger('滾輪被按')">...</button>
    ```

    <br>

* scroll 事件 : 

    scroll 事件就是捲動網頁。

    ```html
    <div v-on:scroll.passive="onScroll">...</div>
    ```

    基本上，當使用了 `v-on:scroll` 如果沒有特別需求，就加上 `.passive` 修飾符吧，`.passive` 會執行默認方法，你可能會說本來不加不是也會執行默認方法嗎 ? 沒錯，但是每次的任何事件產生，瀏覽器其實都會去檢查看看有沒有 `preventDefault()` 來阻止預設動作，當 user 滑動頁面時，大量 event 產生，瀏覽器不得不大量重複做沒必要的事件檢查，導致畫面卡頓。我們加入了 `.passive` 之後，就是告訴瀏覽器不必檢查，保證沒有 `preventDefault()` 出現。所以可以對畫面 scroll 做到優化效果。

    <br>

* keyup 事件 : 

    按鍵觸發事件

    ```html
    <!-- 按 enter -->
    <input v-on:keyup.enter="submit">
    <!-- 按 page down -->
    <input v-on:keyup.page-down="onPageDown">
    <!-- 按 tab -->
    <input v-on:keyup.tab="onTab">
    <!-- 按 esc -->
    <input v-on:keyup.esc="onEsc">
    <!-- key value 也可以 -->
    <input v-on:keyup.13="submit">
    <!-- Alt + C -->
    <input v-on:keyup.alt.67="clear">
    <!-- Ctrl + Click -->
    <div v-on:click.ctrl="doSomething">Do something</div>
    ```

    還有很多組合按件，可以自己去查。

    <br>

## v-for :

* v-for 就是 forEach，可以把陣列資料中每一筆資料歷遍。

    ```html
    <template>
    <div>
        <ul>
            <li v-for="man in people" :key="man">{{man.name}} - {{man.age}}</li>
        </ul>
    </div>
    </template>

    <script>
    export default {
    data(){
        return{
        people: [
            {name: "Johnny", age: 21},
            {name: "Ben", age: 26},
            {name: "Yenson", age: 17},
          ]
        }
      }
    };
    </script>
    ```

