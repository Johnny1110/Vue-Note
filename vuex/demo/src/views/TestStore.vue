<template>
    <div>
        <h1>Test Store Page</h1>

        <hr>
        <h3>Member 模組測試</h3>
        <div class="update">
            <label>個人資料</label>
            <p><label>姓名 :</label> <input type="text" v-model="userInfo.name"></p>
            <p><label>年齡 :</label> <input type="text" v-model="userInfo.age"></p>
            <p><label>地址 :</label> <input type="text" v-model="userInfo.addr"></p>
            <button @click="updateUserInfo(userInfo)">更新</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        methods: {
            ...mapActions({
                updateUserInfo: "updateUserInfo"
            })
        },
        computed: {
            ...mapGetters({
                userInfo: "userInfo"
            })
        }
    }
</script>

<style>
    .update {
        background-color: greenyellow;
    }
</style>