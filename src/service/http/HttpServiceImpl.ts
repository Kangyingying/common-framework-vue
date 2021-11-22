/**
 * 接口网络请求实现
 *@author kyy
 *@date 2021/11/22 16:09
 */
import {BaseServiceImpl} from '@/service/http/BaseServiceImpl';
import {UrlConfig} from '@/config/UrlConfig';

export class HttpServiceImpl extends BaseServiceImpl {
    private static service: HttpServiceImpl;
    private constructor() {
        super();
    }

    public static getInstance(): HttpServiceImpl {
        if (HttpServiceImpl.service == null) {
            HttpServiceImpl.service = new HttpServiceImpl();
        }

        return HttpServiceImpl.service;
    }

    /**
     * TODO 路径中追加参数
     */
    public getA(id: string): Promise<any> {
        const self      = this;
        const option    = BaseServiceImpl.getGetOption();
        option.url      = UrlConfig.getA.replace('{id}', id);
        return new Promise((resolve, reject) => {
            self.getRequest(option).then(function (res) {
                resolve(res.data);
            }) .catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * TODO params传参
     * @param id
     */
    public getB(id: string) {
        const self      = this;
        const option    = BaseServiceImpl.getGetOption();
        option.url      = UrlConfig.getB;
        option.params   = {
            id: id
        };
        return new Promise((resolve, reject) => {
            self.getRequest(option).then(function (res) {
                resolve(res.data);
            }) .catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * TODO data传参
     * @param id
     */
    public postA(id: string) {
        const self      = this;
        const option    = BaseServiceImpl.getPostOption();
        option.url      = UrlConfig.post;
        option.data   = {
            id: id
        };
        return new Promise((resolve, reject) => {
            self.getRequest(option).then(function (res) {
                resolve(res.data);
            }) .catch(function (error) {
                reject(error);
            });
        });
    }

    /**
     * TODO body方式传参
     * @param id
     */
    public postB(id: string) {
        const self = this;
        const option = BaseServiceImpl.getPostOption();
        option.url = UrlConfig.post;
        const obj = {
            id: id
        };
        option.data = JSON.stringify(obj);
        // @ts-ignore
        option.headers['Content-Type'] = BaseServiceImpl.jsonContentType;
        return new Promise((resolve, reject) => {
            self.getRequest(option).then(function (res) {
                resolve(res.data);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
}
