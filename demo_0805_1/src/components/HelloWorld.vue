<script>
  export default{
    data(){
      return{
        myclass:"cls",
        myid:"idd",
        mytitle:null,
        isdisable:true,
        obj:{
          class:"aa",
          id:"bb",
        }
      }
    }
  }
</script>

<template>
  <div v-bind:class="myclass" v-bind:id="myid" v-bind:title="mytitle">test</div>
  <button :disabled="isdisable">button</button>
  <div v-bind="obj">test1</div>
</template>


<style>
  .cls{
    color: aqua;
    font-size: 30px;
  }
</style>