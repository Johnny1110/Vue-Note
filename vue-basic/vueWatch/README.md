# Vue watch

<br>

Vue 物件提供一個更通用的方式來觀察與響應 `data` 的變動 : 使用 `watch` 屬性。

__注意 !__ 不要濫用 `watch` 屬性，當某一些 `data` 需要隨其他 `data` 改變時，我們要用 `computed` 而不是 `watch`。

`watch` 是真正意義上的 `data` 監聽器，時時刻刻監聽某一個 `data` 的變動，適用於一些非同步請求處理。

<br>

## 範例

* 使用 `watch` 監聽 `data` :

    ```html
    <template>
    <div>
        <div>
        <label>姓氏</label>
        <input type="text" v-model="lastname" />
        </div>

        <div>
        <label>名稱</label>
        <input type="text" v-model="firstname" />
        </div>

        <div>{{fullname}}</div>
    </div>
    </template>

    <script>
    export default {
    data () {
      return {
        firstname: '',
        lastname: '',
        fullname: ''
      }
    },
    watch: {
      firstname (newVal, oldVal) {
        this.fullname = `${newVal} ${this.lastname}`
        },
      lastname (newVal, oldVal) {
        this.fullname = `${this.firstname} ${newVal}`
        }
      }
    }
    </script>
    ```
    直接對 `firstname` 與 `lastname` 監聽，當這兩個值發生變化後，更新 fullname 的值。

    <br>

* __再講白一點：__ 其實只要理解成，你今天想要一個值，這個值要根據其他現有的 `data` 的改變而改變，這時果斷用 `computed`。如果你今天只是想對現有的 `data` 實施監聽，那就可以用 `watch`。