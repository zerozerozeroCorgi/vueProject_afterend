import HomeComponent from "../component/Home.vue";
import LoginComponent from "../component/login.vue";

// 导出路由配置
export default {
    routes: [

        // 首页路由配置
        {path: "/", redirect: "/home"},
        {name: "h", path: "/home", component: HomeComponent},

        // 登录路由配置
        {name: "l", path: "/login", component: LoginComponent}
    ]
};