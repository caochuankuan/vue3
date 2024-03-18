<template>
    <h3>数组监听</h3>
    <button @click="add">添加数据</button>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{ name }}</li>
    </ul>
    <button @click="concatarry">合并数组</button>
    <h3>数组1</h3>
    <p v-for="(value,index) in num1" :key="index">{{ value }}</p>
    <h3>数组2</h3>
    <p v-for="(value,index) in num2" :key="index">{{ value }}</p>
</template>

<script>

export default{
    data(){
        return{
           names:["aa","bb","cc"] ,
           num1:[1,2,3,4,5],
           num2:[6,7,8,9,10],
        }
    },
    methods:{
        add(){
            // 引起ui变化,pop,push,shift,unshift,splice,sort,reverse
            this.names.push("dd");
            // 不引起ui变化,concat,filter,slice-------想引起变化，this.names=this.names.concat(["dd"]);
            // this.names.concat(["dd"]);
            // console.log(this.names);
            // console.log(this.names.concat(["dd"]));
        },
        concatarry(){
            this.num1 = this.num1.concat(this.num2);
        }
    }
}

</script>