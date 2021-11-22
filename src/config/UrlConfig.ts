/**
 * 接口路径配置
 *@author kyy
 *@date 2021/11/22 16:10
 */
export class UrlConfig {
    // FIXME 以下为demo, 以实际情况为准
    public static domain   = `https://${process.env.VUE_APP_ENVIRONMENT}.XXXX.com`;
    public static baseUrl  = `${UrlConfig.domain}/api`;

    // 在路径后追加参数
    public static getA     = `${UrlConfig.baseUrl}/get/{id}`;
    // 以query方式追加参数
    public static getB     = `${UrlConfig.baseUrl}/get`;
    public static post     = `${UrlConfig.baseUrl}/post`;

}
