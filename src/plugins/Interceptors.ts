import { App } from 'vue';
import {Interceptors} from '@/service/http/interceptor/Interceptors';

const interceptor = {
    install: (app: App) => {
        // Plugin code goes here
        if (!app) {
            return;
        }
        // 初始化拦截器
        Interceptors.getInstance().init();
    }
};

export default interceptor;

