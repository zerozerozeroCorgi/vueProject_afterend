import LoginComponent from "../component/login/login.vue";
import AdminComponent from '../component/admin/Admin.vue';

// 导入商品相关组件
import GoodsContentListComponent from "../component/admin/goods/content/GoodsContentList.vue";
import GoodsContentAddComponent from "../component/admin/goods/content/GoodsContentAdd.vue";
import GoodsContentEditComponent from "../component/admin/goods/content/GoodsContentEdit.vue";


// 导出路由配置
let adminChildren = [
    {name: "gcl", path: "goods/content/list", component: GoodsContentListComponent},
    {name: "gca", path: "goods/content/add", component: GoodsContentAddComponent},
    {name: "gce", path: "goods/content/edit", component: GoodsContentEditComponent}
];
export default {
    routes: [

        // 首页路由配置
        {path: "/", redirect: "/admin"},
        {name: "a", path: "/admin", component: AdminComponent, children: adminChildren},

        // 登录路由配置
        {name: "l", path: "/login", component: LoginComponent}


       

    ]
};