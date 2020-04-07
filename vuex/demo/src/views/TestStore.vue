<template>
    <div>
        <h1>Test Store Page</h1>

        <hr>

        <h3>ShoppingCart 模組測試</h3>
        <form></form>
        {{cartList}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                cartList: "cartList"
            })
        }
    }
</script>