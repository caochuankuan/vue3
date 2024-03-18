<template>
    <h3>event事件</h3>
    <div>{{ count }}</div>
    <button @click="add">+1</button>
    <button @click="addd('hello')">hello</button>
    <h3>事件传参1</h3>
    <div v-on:click="getName(name)" v-for="(name,index) in names" :key="index">{{ name }}</div>
    <h3>事件传参2</h3>
    <div v-on:click="getName(name,$event)" v-for="(name,index) in names" :key="index">{{ name }}</div>
</template>

<script>
export default{
    data(){
        return{
            count:0,
            names:["aa","bb","cc"],
        }
    },
    methods:{
        add(e){
            e.target.innerHTML="count"+this.count;
            this.count++;
        },
        addd(e){
            this.count=e;
        },
        getName(n){
            console.log(n);
        },
        getName(n,e){
            console.log(n);
            console.log(e);
        },
    }
}
</script>