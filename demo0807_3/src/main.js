
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'

// createApp(App).mount('#app')


// 全局注册
const app = createApp(App)


// 组件放中间
app.component("Header",Header)



app.mount("#app")