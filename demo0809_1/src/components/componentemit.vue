<template>
    <h3>$emit自定义事件</h3>
    <p>子传父数据：{{ Msg }}</p>
    <!-- 哪里传来的，事件就放在谁标签里 -->
    <child @someemit="chuandi"/>
</template>

<script>

import child from './child.vue';
export default{
    data(){
        return{
            Msg:""
        }
    },
    components:{
        child
    },
    methods:{
        chuandi(data){
            this.Msg=data
        }
    }
}

</script>