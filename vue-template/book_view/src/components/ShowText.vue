<template>
  <div>
    <div>
      <label>姓名</label>
      <input type="text" v-model="name" />
    </div>

    <div>
      <label>課程</label>
      <input type="text" v-model="course" />
    </div>

    <div>{{message}}</div>

    <div>{{sayHello()}}</div>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      name: "",
      course: ""
    };
  },
  methods:{
    sayHello(){
      return "hello " + this.name
    }
  },
  computed: {
    message() {
      var msg = `welcome to ${this.course} Mr/Ms. ${this.name}`;
      return msg;
    }
  }
};
</script>