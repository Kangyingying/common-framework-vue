import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
/*全局引用*/
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import interceptors from '@/plugins/Interceptors';

createApp(App)
    .use(store)
    .use(router)
    .use(Antd)
    .use(interceptors)
    .mount('#app');
