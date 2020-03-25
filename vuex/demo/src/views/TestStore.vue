<template>
    <div>
        <h1>Test Store Page</h1>

        <label>MSG: </label>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            msg(){
                return this.$store.state.msg
            }
        }
    }
</script>