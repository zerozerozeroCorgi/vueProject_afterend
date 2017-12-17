import HomeComponent from "../component/home/Home.vue";
import LoginComponent from "../component/login/login.vue";
import AdminComponent from '../component/admin/Admin.vue';

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