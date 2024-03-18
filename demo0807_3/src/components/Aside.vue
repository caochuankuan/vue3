<template>
    <h1 class="aside">aside
        <List/>
        <List/>
        <List/>
    </h1>
</template>

<script>

import List from './List.vue';
export default{
    components:{
        List,
    }
}

</script>

<style>

.aside{
    float: right;
    width: 35%;
    height: 550px;
    border: 5px solid black;
}

</style>