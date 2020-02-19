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

    <div>
      <label>全名</label>
      <input type="text" v-model="fullname" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  computed: {
    fullname: {
      get () {
        return `${this.firstname} ${this.lastname}`
      },
      set (val) {
        var names = val.split(' ')
        this.firstname = names[0]
        this.lastname = names[names.length - 1]
      }
    }
  }
}
</script>
