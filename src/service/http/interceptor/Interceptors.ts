import axios from 'axios';
import {BaseServiceImpl} from '@/service/http/BaseServiceImpl';
// @ts-ignore
import * as queryString from 'querystring';
import {Exception} from '@/service/http/exception/Exception';
import {HTTPMethod} from '@/constants/HTTPMethod';

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
            if (option.method === HTTPMethod.POST) {
                this.setTransformRequest(option);
            } else {
                this.setParamsSerializer(option);
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

    private setTransformRequest(option: any) {
        option.transformRequest = [function(data: any) {
            // 检查是否以json方式传参
            const contentType = option.headers ? option.headers['Content-Type'] : null;
            if (contentType && contentType === BaseServiceImpl.jsonContentType) {
                return data;
            }
            return queryString.stringify(data);
        }];
    }

    private setParamsSerializer(option: any) {
        option.paramsSerializer = function(params: any) {
            return queryString.stringify(params);
        };
    }
}
