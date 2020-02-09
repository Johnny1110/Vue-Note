var Vue = require('vue')

var data = {age: 1}

var app = new Vue({
    el: '#app',
    data: data
})

// 引用相同對象
console.log(`app.age === data.age ? ${app.age === data.age}`)

// 屬性更改亦影響原本資料
app.age = 1000
console.log(`app.age = ${app.age}`)
console.log(`data.age = ${data.age}`)

// vue.js 物件屬性及方法
console.log(`app.$data === data ? ${app.$data === data}`)
// console.log(app.$el === document.getElementById('app')) // 沒有 html 不能用
app.$watch('age', function(newValue, oldValue) {
    console.log(`age 舊值${oldValue}, age 新值${newValue}`)
});
app.age = 999


// --------------------------------//

// vue 的 watch 寫在物件宣告裡 :


var watcher = new Vue({
    data: {
        a: 10,
    },
    watch:{
        a(newValue, oldValue) {
            console.log(`a 舊值${oldValue}, a 新值${newValue}`)
        }
    }
})

watcher.a = 1500
