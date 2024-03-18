<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{onfun("子传父")}}</p>
</template>

<script>

export default{
    data(){
        return{
            
        }
    },
    props:{
        title:String,
        // 注意是onfun而不是fn
        onfun:Function,
    },
}

</script>