<template>
    <h3>侦听器 </h3>
    <p>{{ massage }}</p>
    <button @click="update">修改数据</button>
</template>

<script>

export default{
    data(){
        return{
            massage : "hello",
        }
    },
    methods:{
        update(){
            this.massage = "world";
        }
    },
    watch:{
        // newValue:改变之后的数据
        // oldValue:改变之前的数据
        // 函数名必须与侦听的数据对象保持一致
        massage(newvalue,oldvalue){
            console.log(newvalue,oldvalue);
        }
    }
}

</script>