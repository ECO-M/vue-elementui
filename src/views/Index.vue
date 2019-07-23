<template>
    <div>
        <Bread :breadList="breadList"></Bread>
    </div>
</template>

<script>
export default {
    components:{
        Bread:()=>import("../components/c-bread.vue")
    },
    data(){
        return{
            breadList:["测试"]
        }
    }
}
</script>

<style lang="less" scoped>

</style>

