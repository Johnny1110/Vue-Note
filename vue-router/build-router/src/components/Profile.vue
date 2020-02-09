<template>
    <div>
        <h3>使用者 Profile</h3>
        <button @click="sayHello">按下去</button>
    </div>
</template>

<script>
export default {
    methods:{
        sayHello(){
            alert(`Hello this is profile page !!`)
        }
    } 
}
</script>