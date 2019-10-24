<template>
    <div class="page2">
        <h1>问卷调查表填写</h1>
        <P>兴趣？</P>
        <input type="checkbox"  value=读书" v-model="hobby">读书
        <input type="checkbox"  value="游泳" v-model="hobby">游泳
        <input type="checkbox"  value="唱歌" v-model="hobby">唱歌<br><br>
        <button @click="upClick()">上一步</button> <button @click="doClick()">下一步</button> <button @click="rset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        data(){
            return{
                hobby:[]
            }
        },
        methods:{
            upClick(){
                this.$router.push('/Page1');
            },
            doClick(){
                this.$store.commit("addList",{hobby:this.hobby})
                this.$router.push('/Page3');
            },
            rset(){
                this.hobby=[]
            }
        }
    }
</script>


<style scoped>

</style>