<template>
    <h3>条件渲染</h3>
    <div v-if="aa">你能看见我吗</div>
    <div v-else-if="bb">你还能看见我吗</div>
    <div v-show="cc">看我</div>
    <div v-show="dd">看我</div>
</template>

<script>
    export default{
        data(){
            return{
                aa:false,
                bb:true,
                cc:true,
                dd:false,
            }
        }
    }
</script>