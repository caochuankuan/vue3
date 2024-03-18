<script>

  export default{
    data(){
      return{
        msg:"yifeng",
        ok:false,
        massage:6,
        hello:"hello world",
        rawhtml:"<a href='http://chuankuan.top'>test</a>"
      }
    }
  }

</script>

<template>

  <h1>123</h1>
  <p>{{ msg }}</p>
  <p>{{ massage }}</p>
  <p>{{ massage+1 }}</p>
  <!-- <p>{{ massage++ }}</p> -->
  <p>{{ massage+1 }}</p>
  <p>{{ ok?"yes":"no" }}</p>
  <p>{{ hello.split("").reverse().join("") }}</p>
  <p>{{ rawhtml }}</p>
  <p v-html="rawhtml"></p>

</template>
