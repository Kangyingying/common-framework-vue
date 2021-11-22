import {ExceptionEnum} from './ExceptionEnum';
export class Exception implements Error {

    public name: string;
    public code: number;
    public message: string;

    constructor(error: any) {
        if (error.response) {
            this.code    = error.response.status;
            this.message = error.response.data.msg;
            switch (this.code) {
                case 401: {
                    this.name = ExceptionEnum.sc_unauthorized.toString();
                    break;
                }
                case 499: {
                    this.name = ExceptionEnum.biz_error.toString();
                    break;
                }
                case 498: {
                    this.name = ExceptionEnum.verify_error.toString();
                    break;
                }
                default: {
                    this.name = ExceptionEnum.undefined_error.toString();
                }
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.code    = 0;
            this.message = '服务器连接超时，请稍候再试';
            this.name    = ExceptionEnum.custom_error.toString();
        } else {
            // Something happened in setting up the request that triggered an Error
            this.code    = 1;
            this.message = '未定义异常';
            this.name    = ExceptionEnum.custom_error.toString();
        }
    }


}
