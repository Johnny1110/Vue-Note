<template>
    <div>
        <h1>welcome to HomePage</h1>
        <label>User Name</label>
        <input type="text" v-model="username"/>

        <br/>
        
        <div id='router-link'>
            <router-link to='/user/Johnny/shoppingcart'>router-link 購物車</router-link>
            <br>
            <router-link to='/user/Johnny/profile'>router-link 個人頁</router-link>
        </div>
        <hr/>
        <div id='router-push'>
            <button @click='pushToCart'>router.push() 購物車</button>
            <br>
            <button @click='pushToProfile'>router.push() 個人頁</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
            return{
                username: ''
            }
        },

    methods: {
        pushToCart(){
            var path = `/user/${this.username}/shoppingcart`
            this.$router.push(path)
        },

        pushToProfile(){
            var path = `/user/${this.username}/profile`
            this.$router.push({
                path: path,
                query:{
                    domain: 'frizo',
                    author: 'Johnny'
                }
            })
        }
    }
}
</script>