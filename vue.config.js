console.debug('当前环境配置：', process.env.VUE_APP_ENVIRONMENT);
console.debug('当前打包模式：', process.env.NODE_ENV);
// const webpack = require('webpack');
module.exports = {
    // 选项...
    publicPath: './', //关键点
    //是否开启eslint校验
    lintOnSave: false,
    productionSourceMap: false,
}
