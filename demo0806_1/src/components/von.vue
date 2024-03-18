<template>
    <h3>v-on</h3>
    <div>{{ count }}</div>
    <button v-on:click="count++">+1</button>
    <button @click="count--">-1</button>
    <div>{{ count1 }}</div>
    <button v-on:click="add">+1</button>
    <button @click="pause">-1</button>
</template>

<script>
export default{
    data(){
        return{
            count:0,
            count1:10
        }
    },
    methods:{
        add(){
            this.count1++;
        },
        pause(){
            this.count1--;
        }
    }
}
</script>