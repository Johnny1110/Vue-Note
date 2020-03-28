<template>
    <div>
        <h1>Test Store Page</h1>
        {{msg}}
        <input type="text" v-model="newMsg"/>
        <button @click="changeMsg(newMsg)">Change Msg</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        data () {
            return {
                newMsg: ''
            }
        },

        methods: {
            ...mapActions({
                changeMsg: "changeMsg"
            }),
        },

        computed: {
            ...mapGetters({
                msg: "currentMsg"
            })
        }
    }
</script>