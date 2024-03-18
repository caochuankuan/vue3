<template>
    <h3>列表渲染</h3>
    <div v-for="aa in names">{{ aa }}</div>

    <div v-for="(item,index) in items">
        <div v-bind:class="cla">{{ index+item.id }}</div>
        <div><a :href="item.act">{{ item.title }}</a></div>
    </div>

    <div v-for="(value,key,index) in obj">{{ value }}-{{ key }}-{{ index }}</div>
</template>

<script>
    export default{
        data(){
            return{
                cla:"cla",
                names:["aa","bb","cc"],
                items:[
                    {
                        id:1,
                        title:"一",
                        act:"http://chuankuan.top"
                    },
                    {
                        id:2,
                        title:"二",
                        act:"http://chuankuan.top:5244"
                    },
                    {
                        id:3,
                        title:"三",
                        act:"http://124.71.2.21:213"
                    }
                ],
                obj:{
                    aa:"a",
                    bb:"b",
                    cc:"c"
                }
            }
        }
    }
</script>

<style>
    .cla{
        background-color: aqua;
    }
</style>