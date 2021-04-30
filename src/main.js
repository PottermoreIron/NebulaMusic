import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './elementUI/index'
import './assets/icon/fontawesome/index'
import './assets/icon/iconfont/iconfont.css'
// iconfont 彩色图标
import './assets/icon/iconfont/iconfont.js'
// 封装svg
import '@/assets/js/iconfont/svg-icon.js'

// 注册一下utils
import global from './utils/global'


Vue.config.productionTip = false
Vue.use(global)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')