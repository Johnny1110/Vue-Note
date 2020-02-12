<template>
    <div>
        <h1>hello ! this is private page !</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: 'Johnny Wang'
        }
    },

    beforeRouteEnter(to, from, next) {
        var authorized = true;
        console.log("target : " + to.path)
        if (authorized){
            next(vm => {
            vm.name = "Benson"
        })
        }else{
            next('/');
        }
    }
}
</script>