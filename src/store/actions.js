import http from '../http/http.js';
import router from '../router/router';
export default {
    /**
     * @method {getMenu} 动态获取菜单
     */
    login(context,param) {
        http("/user/login", 'post', param).then(res => {
            localStorage.setItem('token',res.sysUser.token);//存token到local
            context.commit("saveUserInfo",res);
            router.push('/home');
        })
    },
    getMenu(context) {
        // http().then(res=>{

        // })
    }
}