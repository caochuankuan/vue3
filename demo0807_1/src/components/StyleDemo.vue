<template>
    <h3 :style="{'color':activecolor,'fontSize':fontsize + 'px'}">style 绑定(对象1)</h3>
    <h3 :style="styleobj">style 绑定(对象2)</h3>
    <h3 :style="[styleobj]">style 绑定(数组)</h3>
</template>

<script>

export default{
    data(){
        return{
            activecolor:"blue",
            fontsize:30,
            styleobj:{
                color:"skyblue",
                fontsize:"20px",
            }
        }
    }
}

</script>