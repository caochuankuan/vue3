<script>
import Article from "./Article.vue";
export default{
    components:{
        Article,
    }
}

</script>


<template>
    <h1 class="main">main
        <Article/>
        <Article/>
    </h1>

</template>



<style scoped>

.main{
    float: left;
    width: 60%;
    height: 550px;
    border: 5px solid black;
}

</style>