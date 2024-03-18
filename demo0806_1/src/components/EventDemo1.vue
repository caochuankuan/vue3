<template>
    <h3>阻止默认事件</h3>
    <a @click.prevent="default1" href="http://chuankuan.top">逸风小站</a>
    <h3>阻止事件冒泡</h3>
    <div @click="clickdiv">
        <p @click.stop="clickp">测试冒泡</p>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods:{
        default1(e){
            // 第3行
            // e.preventDefault();
            console.log("点击了");
        },
        clickdiv(){
            console.log("div");
        },
        clickp(e){
            // 第6行
            // e.stopPropagation();
            console.log("p");
        },
    }
}

</script>