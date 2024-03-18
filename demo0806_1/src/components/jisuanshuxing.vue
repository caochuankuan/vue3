<template>
    <h3>计算属性缓存vs方法/函数</h3>
    <p>计算属性：计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算</p>
    <p>方法：方法调用总是会在重渲染发生时再次执行函数</p>
    <div>{{ yifeng.id }}</div>
    <!-- 计算属性只需要写函数名，不需要括号 -->
    <p>{{ kuan }}</p>
    <p>{{ kuan1() }}</p>
</template>

<script>

export default{
    data(){
        return{
            yifeng:{
                id:"liangzai",
                content:["aaa","bbb","ccc"]
            }
        }
    },
    // 计算属性
    computed:{
        kuan(){
            return this.yifeng.content.length>0?"yes":"no";
        }
    },
    methods:{
        kuan1(){
            return this.yifeng.content.length>0?"yes":"no";
        }
    }
}

</script>