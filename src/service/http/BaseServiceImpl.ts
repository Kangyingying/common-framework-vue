import axios, {AxiosPromise} from 'axios';
import {ServiceOption} from '@/service/http/option/ServiceOption';
import PostOption = ServiceOption.PostOption;
import GetOption = ServiceOption.GetOption;
import DeleteOption = ServiceOption.DeleteOption;
// @ts-ignore
import queryString from 'querystring';
import {HTTPMethod} from '@/constants/HTTPMethod';

/**
 * 接口实现类基类
 *@since
 *@author kyy
 *@Date 2018/6/9 9:01
 */
export class BaseServiceImpl {
    public static jsonContentType = 'application/json; charset=UTF-8';

    constructor() {
    }

    public static getPostOption() {
        return new PostOption();
    }

    public static getGetOption() {
        return new GetOption();
    }

    public static getDeleteOption() {
        return new DeleteOption();
    }

    public static getPutOption() {
        return new DeleteOption();
    }

    public static clear(serviceImp: BaseServiceImpl) {
        // @ts-ignore
        serviceImp = null;
    }

    protected getRequest(option: any): AxiosPromise {
        if (option.method === HTTPMethod.POST) {
            this.setTransformRequest(option);
        } else {
            this.setParamsSerializer(option);
        }
        return axios.request(option);
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
