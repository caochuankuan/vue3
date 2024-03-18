<template>
    <h3>数据子传父</h3>
    <button @click="emitevent">传递数据</button>
</template>

<script>

export default{
    data(){
        return{
            msg:"child data"
        }
    },
    methods:{
        emitevent(){
            // 自定义事件，组件事件，数据子传父
            this.$emit("someemit",this.msg)
        }
    }
}

</script>