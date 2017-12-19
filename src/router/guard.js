import Vue from 'vue';
// 导出路由守卫
export default (to, from, next) => {
    Vue.prototype.$http.get(Vue.prototype.$api.islogin)
        .then(res => {
            if (to.name == "l") {
                if (res.data.code == "logined") {
                    next("/");
                } else if (res.data.code == "nologin") {
                    next();
                }
            } else if (to.name != "l") {
                if (res.data.code == "logined") {
                    next();
                } else if (res.data.code == "nologin") {
                    next("/login");
                }
            }
        });
    
}