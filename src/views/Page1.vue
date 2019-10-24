<template>
    <div class="page1">
        <h1>问卷调查表填写</h1>
        <P>请问你的性别:</P>
        <input type="radio" name="radio" v-model="sex" value="男">男
        <input type="radio" name="radio" v-model="sex" value="女">女
        <input type="radio" name="radio" v-model="sex" value="保密">保密<br><br>
        <button @click="doClick()">下一步</button> <button @click="rset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        data(){
            return{
                sex:'男',
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addList",{sex:this.sex})
                this.$router.push('/Page2');
                console.log(this.$store.state.info)
            },
            rset(){
                this.sex="男"
            }
        }
    }
</script>

<style scoped>

</style>