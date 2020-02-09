// 注意 : 不可以在選項屬性或 callback 方法上使用 =>

var Vue = require('vue')

var app = new Vue({
    data: {
        a: 1,
    },

    // 當 vue 物件建立時
    created(){
        console.log(`created : a = ${this.a}`)
    },

    updated(){
        console.log(`updated : a = ${this.a}`)
    },

    mounted(){
        console.log(`mounted : a = ${this.a}`)
    },

    destroy(){
        console.log(`destroy : a = ${this.a}`)
    },
})
