import axios, {AxiosPromise} from 'axios';
import {ServiceOption} from '@/service/http/option/ServiceOption';
import PostOption = ServiceOption.PostOption;
import GetOption = ServiceOption.GetOption;
import DeleteOption = ServiceOption.DeleteOption;

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
        return axios.request(option);
    }
}
