import {HTTPMethod} from '@/constants/HTTPMethod';

export namespace ServiceOption {
    export class PostOption {
        // @ts-ignore
        url: string;
        responseType = 'json';
        headers = {token: ''};
        method = HTTPMethod.POST;
        data = {};
        transformRequest = null;
    }

    export class GetOption {
        // @ts-ignore
        url: string;
        responseType = 'json';
        headers = {token: ''};
        method = HTTPMethod.GET;
        params = {};
        paramsSerializer = null;
    }

    export class DeleteOption {
        // @ts-ignore
        url: string;
        responseType = 'json';
        headers = {token: ''};
        method = HTTPMethod.DELETE;
        params = {};
        paramsSerializer = null;
    }

    export class PutOption {
        // @ts-ignore
        url: string;
        responseType = 'json';
        headers = {token: ''};
        method = HTTPMethod.PUT;
        data = {};
        paramsSerializer = null;
    }
}
