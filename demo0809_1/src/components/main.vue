<template>
    <h3>main</h3>
    <p>输入的内容：{{ shujv }}</p>
    <search @chuandi="chuandidata"/>
</template>

<script>

import Search from './search.vue';
export default{
    data(){
        return{
            shujv:""
        }
    },
    components:{
        Search,
    },
    methods:{
        chuandidata(data){
            this.shujv=data;
        }
    }
}

</script>