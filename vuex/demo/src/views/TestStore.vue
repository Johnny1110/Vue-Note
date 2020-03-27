<template>
    <div>
        <h1>Test Store Page</h1>
        {{msg}}
        <input type="text" v-model="newMsg"/>
        <button @click="future(newMsg)">future</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data () {
            return {
                newMsg: ''
            }
        },

        methods: {
            ...mapActions([
                "future"
            ]),
        },

        computed: {
            msg () {
                return this.$store.state.msg
            }
        }
    }
</script>