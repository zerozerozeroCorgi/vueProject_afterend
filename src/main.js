import Vue from "Vue";
import VueRouter from "vue-router";
import AppComponent from "./component/App.vue";
import routerConfig from "./router/router"

// 启动vue插件
Vue.use(VueRouter);

new Vue({
    el: "#app",
    render(createElement) {
        return createElement(AppComponent);
    },
    router: new VueRouter(routerConfig)
    
});