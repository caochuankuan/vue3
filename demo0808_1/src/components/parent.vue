<template>
    <h3>parent</h3>
    <!-- 哪里传来的，事件就放在谁标签里 -->
    <child title="静态数据传递" :test="demo" :age="age" :names="names" :obj="obj"/>
</template>

<script>
import child from './child.vue';
export default{
    data(){
        return{
            demo:"动态数据传递",
            age:20,
            names:["aa","bb","cc"],
            obj:{
                name:"yifeng",
                age:20,
            }
        }
    },
    components:{
        child,
    }

}
</script>