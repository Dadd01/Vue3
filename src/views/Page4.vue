<template>
    <div class="page4">
        <div >
            <h1>问卷调查表填写</h1>
            <P v-for = "item in info[0]">性别：{{item}}</P><br>
            <P v-for = "item in info[1]">爱好：{{item}}</P><br>
            <P v-for = "item in info[2]">自我介绍：{{item}}</P><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page4",
        data(){
            return{
                list:this.$store.state.info
            }
        }
    }
</script>

<style scoped>

</style>