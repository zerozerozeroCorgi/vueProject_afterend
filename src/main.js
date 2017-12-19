// 1.1 导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './less/index.less';

// 1.2 启动vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);

// 2.1 导入根组件
import AppComponent from './component/App.vue';

// 2.2 导入路由配置
import RouterConfig from './router/router.js';   // 写一个目录, 会自动找index.js

// 3. 导入配置后的axios与api, 注入到Vue的原型当中, 这样所有的组件就可以通过this调用了
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

import routerGuard from "./router/guard.js";
const router = new VueRouter(RouterConfig);
router.beforeEach(routerGuard);

// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router: router
});