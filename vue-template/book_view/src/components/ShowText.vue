<template>
  <div>
    <div>{{ msg}}</div>

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

<style>
/* 自定義 css 樣式 */
</style>
