<template>
    <h3>key属性添加到v-for</h3>
    <!-- key不推荐绑定index -->
    <!-- <p v-for="(name,index) in names" :key="index">{{ name }}</p> -->
    <p v-for="item in items" :key="item.id">
        <div>{{ item.id }}</div>
        <div>{{ item.title }}</div>
        <div>{{ item.act }}</div>
    </p>
</template>

<script>
export default{
    data(){
        return{
            // names:["aa","bb","cc"],
            items:[
                    {
                        id:1,
                        title:"asfsaf",
                        act:"http://chuankuan.top"
                    },
                    {
                        id:2,
                        title:"jgghjgj",
                        act:"http://chuankuan.top:5244"
                    },
                    {
                        id:3,
                        title:"rtetree",
                        act:"http://124.71.2.21:213"
                    }
                ],
        }
    }
}
</script>