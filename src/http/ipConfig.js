/**
 * @param {baseUrl} 数据请求全局接口
 * @param {imgUrl}  图片上传全局接口
*/

let baseUrl;
let imgUrl;

if (process.env.NODE_ENV === 'development') {
    //测试环境
    imgUrl = 'http://10.10.0.30:8080/pc';
    baseUrl = 'http://10.10.0.30:8080/pc';
} else {
    //正式环境
    imgUrl = '';
    baseUrl = '';
}

export {
    baseUrl,
    imgUrl,
}