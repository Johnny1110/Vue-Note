# 模板語言的 JS 表達式

<br>

寫在 `{{ }}` 中的 JS 表達式，為了方便視圖顯示資料可以稍微用一點，不建議把過多商業邏輯寫在表達式裡。

<br>

# 範例

* 這邊給出幾組範例，可以參考使用 : 

    ```html
    <template>
    <div>
        {{number + 2}}
        <br>
        {{ok? 'yes' : 'no'}}
        <br>
        <!-- 反轉字元 -->
        {{message.split('').reverse().join('')}}
        <br>
        <div :id="'list-' + id">list</div>
        <br>
        {{number + number2}}
    </div>
    </template>

    <script>
    export default {
    data () {
        return {
        number: 1,
        number2: 4,
        ok: true,
        message: 'hello world',
        id: '1'
        }
      }
    }
    </script>
    ```

    慢慢品吧。