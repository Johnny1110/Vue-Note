<template>
    <div>
        <h1>Test Store Page</h1>

        <label>MSG: </label>
        <p>{{msg}}</p>

        <label>Input MSG: </label>
        <input type="text" v-model="newMsg">
        <button @click="changeMsg(newMsg)">commit</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import * as types from '../store/mutation-types'
    export default {
        data() {
          return{
              newMsg: ''
          }
        },

        methods: {
          ...mapMutations([
              types.CHANGE_MSG
          ])
        },
        computed: {
            msg(){
                return this.$store.state.msg
            }
        }
    }
</script>