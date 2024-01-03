import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css'


const app = createApp(App);
app.use(ElementPlus);
app.use(ElementUI);
app.mount('#app')
