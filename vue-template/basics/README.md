# 文本輸出 vs HTML 輸出

<br>

## 文本輸出

* 基礎文本輸出不多做解釋，直接看範例 :

    ```html
    <template>
      <div>
        {{msg}}
      </div>
    </template>

    <script>
    export default {
    data () {
        return {
          msg: 'hello world'
        }
      }
    }
    </script>
    ```

<br>

## HTML 輸出

* 上面基本文本輸出就是你的 msg 屬性是甚麼就按什麼輸出。即使 msg 屬性是 HTML Tags，輸出時一樣會顯示純文字。

* 要想輸出 HTML Tags，只需如下做 : 

    ```html
    <template>
    <div>
        <!-- 文本 輸出  -->
        <div>{{ msg }}</div>
        <!-- HTML 輸出  -->
        <div v-html="msg"></div>
    </div>
    </template>

    <script>
    export default {
    data () {
        return {
        msg: '<h1 style="color: red;">Hello World</h1>'
        }
      }
    }
    </script>
    ```

    來看看畫面如何 :

    ![1](./imgs/1.jpg)