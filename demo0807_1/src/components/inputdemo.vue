<template>

    <h3>表单输入绑定</h3>
    <form action="">
        <input type="text" v-model="msg">
        <!-- 默认情况下，v-model会在每次input事件后更新数据。你可以添加lazy修饰符来改为在每次change事件后更新数据 -->
        <!-- <input type="text" v-model.lazy="msg"> -->
        <!-- 只接受数字 -->
        <!-- <input type="text" v-model.number="msg"> -->
        <!-- 去除首尾空字符 -->
        <!-- <input type="text" v-model.trim="msg"> -->
        <p>{{ msg }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </form>

</template>

<script>

export default{
    data(){
        return{
            msg : "",
            checked : false,
        }
    }
}

</script>