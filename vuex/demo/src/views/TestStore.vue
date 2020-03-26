<template>
    <div>
        <h1>Test Store Page</h1>
        {{msg}}
        <input type="text" v-model="newMsg" v-on:keypress.enter="changeMsg"/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newMsg: ''
            }
        },

        methods: {
            changeMsg () {
                this.$store.dispatch("changeMsg", this.newMsg)
            }
        },

        computed: {
            msg () {
                return this.$store.state.msg
            }
        }
    }
</script>