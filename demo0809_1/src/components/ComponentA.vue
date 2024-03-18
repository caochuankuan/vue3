<template>
    <h3>ComponentA</h3>
    <p>{{ shujv }}</p>
    <ComponentB title="父传子" :onfun="fn"/>
</template>

<script>

import ComponentB from './ComponentB.vue';
export default{
    data(){
        return{
            shujv:""
        }
    },
    components:{
        ComponentB
    },
    methods:{
        fn(data){
            this.shujv=data
        }
    }
}

</script>