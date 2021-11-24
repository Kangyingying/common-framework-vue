import axios from 'axios';
import {Exception} from '@/service/http/exception/Exception';

/**
 * axios拦截器
 *@author kyy
 *@date 2021/11/22 11:46
 */
export class Interceptors {
    private static instance: Interceptors;
    private constructor() {}
    public static getInstance(): Interceptors {
        if (Interceptors.instance == null) {
            Interceptors.instance = new Interceptors();
        }
        return Interceptors.instance;
    }

    init() {
        this.initRequestInterceptor();
        this.initResponseInterceptor();
    }

    /**
     * 初始化请求拦截器
     * @private
     */
    private initRequestInterceptor() {
        axios.interceptors.request.use((option) => {
            // TODO 设置header头信息
            if (option.headers) {
                option.headers.token = '';
            }
            return option;
        }, (error) => {
            return Promise.reject(new Exception(error));
        });
    }

    /**
     * 初始化响应拦截器
     * @private
     */
    private initResponseInterceptor() {
        axios.interceptors.response.use((response: any) => {
            return Promise.resolve(response);
        }, (error: any) => {
            return Promise.reject(new Exception(error));
        });
    }

}
