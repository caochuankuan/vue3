<template>
    <h3>child</h3>
    <p>{{ title }}</p>
    <p>{{ test }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{ name }}</li>
    </ul>
    <p>{{ obj.name }}</p>
    <p>{{ obj.age }}</p>
    <hr>
    <p>错误操作，props只读，不能修改</p>
    <button @click="update">修改数据</button>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:{
            type:[String,Number,Array]
        },
        test:{
            // 必选项
            required:true,
        },
        age:{
            type:Number,
            // 有传递用传递，无传递默认值
            default:0
        },
        //数字和字符串可以直接default,但是如果是数组和对象，必须通过工厂函数返回默认值
        names:{
            default(){
                return ["null"]
            }
        },
        obj:{

        }
    },
    methods:{
        update(){
            // 错误操作，props只读，不能修改
            this.title = "new data";
        }
    }
}
</script>