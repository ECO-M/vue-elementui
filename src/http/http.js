import axios from 'axios';
import router from '../router/router';//根据自己定义的路由位置进行引入
import { baseUrl, imgUrl } from './ipConfig';
import { Loading, Message } from 'element-ui';

const sendRequest = (apiName, method, data) => {
    //判断是否有接口名
    if (!apiName) {
        return
    }
    //验证token部分
    if (localStorage.getItem('token')) {
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    } else {
        //判断当前是否在登录页
        if (router.currentRoute.path == '/login') {
            console.log(`当前路由path:${router.currentRoute.path}`)
        } else {
            // 跳转登录页,在登录页成功回调里存取token
            Message.error('获取登录信息失败,请重新登录')
            router.push({ path: '/login' });
            return;
        }
    }
    //定义请求参数配置
    let config = {
        url: baseUrl + apiName || '',
        method: method || 'get',
        params: data || '',
        data: data || {},
    }
    //关于data的处理,如果后台按照序列化的标准接受就采用qs模块去处理post请求参数
    if (!data) {
        delete config.params;
        delete config.data;
    } else {
        if (method == 'get' || method == 'GET' || method == "delete" || method == "DELETE") {
            delete config.data
        } else if (method == 'post' || method == 'POST' || method == 'put' || method == 'PUT') {
            delete config.params
        }
    }
    return new Promise((resolve, reject) => {
        axios(config)
            .then(res => {
                if (res.status == 200) {
                    //可和后台协商一个code字段意为请求成功
                    if (res.data.result === "0000") {
                        resolve(res.data.data)
                    }else{
                        Message.error(res.data.msg);
                        reject(res.data.data)
                    }
                }
            })
            .catch(err => {
                //错误提示
                Message.error(res.data.msg);
            })

    })

}

export default sendRequest;