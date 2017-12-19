import LoginComponent from "../component/login/login.vue";
import AdminComponent from '../component/admin/Admin.vue';



import goods from "./goods";
// 导出路由配置
let adminChildren = [ ...goods ];
export default {
    routes: [

        // 首页路由配置
        {path: "/", redirect: "/admin"},
        {name: "a", path: "/admin", component: AdminComponent, children: adminChildren},

        // 登录路由配置
        {name: "l", path: "/login", component: LoginComponent}


       

    ]
};