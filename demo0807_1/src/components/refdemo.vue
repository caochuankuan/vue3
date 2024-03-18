<template>
    <h3>模板引用</h3>
    <div ref="container" class="container">容器</div>
    <button @click="getele">获取元素</button>
    <hr>
    <input type="text" ref="username">
    <button @click="getname">获取名字 </button>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods:{
        getele(){
            console.log(this.$refs.container);
            console.log(this.$refs.container.innerHTML = "aaaaa");
            
        },
        getname(){
            console.log(this.$refs.username.value);
        }
    }
}

</script>