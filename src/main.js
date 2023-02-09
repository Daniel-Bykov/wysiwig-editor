import {createApp} from 'vue'
import App from './App.vue'
import SvgSprite from 'vue-svg-sprite';
import router from './router'
import store from './store'


createApp(App)
  .use(store)
  .use(router)
  .use(SvgSprite)
  .mount('#app')

