import { createApp } from 'vue'
import App from './App.vue'
import stroe from './stroe'
import router from './router'
import ElementPlus from 'element-plus'
import vuetyped from 'vue3typed'
import mouse from '@/mouseClickTitle'
import '@/assets/css/reset.css'
import '@/assets/iconfont/iconfont.css'
import 'element-plus/dist/index.css'
import 'animate.css';

// 滚动动画 wow.js
import { WOW } from 'wowjs'


const app = createApp(App)
app.config.globalProperties.$wow = new WOW({
  boxClass: 'wow', // default  需要执行动画的元素的 class
  animateClass: 'animated', // default  animation.css 动画的 class
  offset: 150, // default  距离可视区域多少开始执行动画
  mobile: true, // default  是否在移动设备上执行动画
  live: false,  // 异步加载的内容是否有效

  // live为true时，控制台会提示：MutationObserver is not supported by your browser. & WOW.js cannot detect dom mutations, please call .sync() after loading new content.

})
app.use(stroe)
app.use(ElementPlus)
app.use(router)
app.use(mouse)
app.use(vuetyped)
app.mount('#app')