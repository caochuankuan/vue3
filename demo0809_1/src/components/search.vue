<template>
    <input type="text" v-model="msg">
</template>

<script>

export default{
    data(){
        return{
            msg:"",
        }
    },
    watch:{
        msg(newvalue,oldvalue){
            this.$emit("chuandi",newvalue)
        }
    }
}

</script>
