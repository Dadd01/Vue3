<template>
    <div class="page3">
        <h1>问卷调查表填写</h1>
        <P>自我介绍</P>
        <textarea cols="50" rows="4" style="OVERFLOW: hidden" v-model="myInfo"></textarea><br><br>
        <button @click="upClick()">上一步</button> <button @click="suClick()">提交</button> <button @click="rset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Page3",
        data(){
            return{
                myInfo:''
            }
        },
        methods:{
            upClick(){
                this.$router.push('/Page2');
            },
            suClick(){
                this.$store.commit("addList",{myInfo:this.myInfo})
                this.$router.push('/Page4');
                console.log(this.$store.state.info)
            },
            rset(){
                this.selfInfo=""
            }
        }
    }
</script>

<style scoped>

</style>