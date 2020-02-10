<template>
  <div>
      <h3>UserProps 組件，你的 username 是 {{username}}</h3>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            username: this.id
        }
    }
}
</script>