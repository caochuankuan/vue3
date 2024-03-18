<template>
    <h3 :class="{'active':isActive,'text_danger':isTextDanger}">class绑定(对象)</h3>
    <h3 :class="obj">class绑定(对象)</h3>
    <h3 :class="[arr1,arr2]">class绑定(数组)</h3>
    <h3 :class="[isActive?'active':'']">class绑定(数组)</h3>
    <h3 :class="[{'active':isActive},arr1]">class绑定(数组+对象)</h3>
</template>

<script>

export default{
    data(){
        return{
            isActive:true,
            isTextDanger:true,
            obj:{
                
                act:true,
                td:true,
            },
            arr1:"aa",
            arr2:"bb",
        }
    }
}

</script>

<style>

.active{
    color: aqua;
}
.text_danger{
    font-size: 30px;
}
.act{
    color: blue;
}
.td{
    font-size: 20px;
}
.aa{
    color: blueviolet;
}
.bb{
    font-size: 15px;
}

</style>