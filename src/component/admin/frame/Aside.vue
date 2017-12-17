<template>
    <div class="aside">
        <div class="logo">
            <img src="../../../img/logo.png" alt="">
        </div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#267cb7"
            text-color="#fff">
            <el-submenu :index="item.title" v-for="item in dataList" :key="item.title">
                <template slot="title">
                    <i class="el-icon-message"></i>
                    <span>{{item.title}}</span>
                </template>
                    <el-menu-item :index="subItem.title" v-for="subItem in item.sub" :key="subItem.title">
                        <router-link :to="subItem.path"><i class="el-icon-tickets"></i>{{subItem.title}}</router-link>
                    </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dataList: [
                    {title: "学生问题汇总", sub: [
                        {title: "内容管理", path: "/"},
                        {title: "类别管理", path: "/"},
                        {title: "评论管理", path: "/"}
                    ]},
                    {title: "前端常用功能", sub: [
                        {title: "内容管理", path: "/"},
                        {title: "类别管理", path: "/"},
                        {title: "评论管理", path: "/"}
                    ]},
                    {title: "重难点专区", sub: [
                        {title: "内容管理", path: "/"},
                        {title: "类别管理", path: "/"},
                        {title: "评论管理", path: "/"}
                    ]},
                    {title: "资源下载", sub: [
                        {title: "内容管理", path: "/"},
                        {title: "类别管理", path: "/"},
                        {title: "评论管理", path: "/"}
                    ]},
                    {title: "购物商城", sub: [
                        {title: "内容管理", path: "/"},
                        {title: "类别管理", path: "/"},
                        {title: "评论管理", path: "/"}
                    ]},
                    {title: "订单管理", sub: [
                        {title: "订单列表", path: "/"}
                    ]}
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    .aside {
        height: 100%;
        position: relative;
        padding-top: 42px;
        box-sizing: border-box;
        width: 100%;
        overflow: hidden;
        .logo {
            height: 42px;
            position: absolute;
            left: 0;
            top: 0;
        }
        .el-menu {
            border-right: 0;
            height: 100%;
            i {
                color: #fff;
            }
        }
    }
</style>