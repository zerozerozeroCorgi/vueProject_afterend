<template>
    <el-container>
        
        <!-- 左侧 -->
        <el-aside width="180px">

            <!-- 左侧导航，公共部分 -->
            <app-aside></app-aside>
        </el-aside>

        <!-- 右侧 -->
        <el-container>

            <!-- 右侧头部，公共部分 -->
            <el-header>
                <app-header></app-header>  
            </el-header>

            <!-- 右侧主体，变化部分 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import AsideComponent from "./frame/Aside.vue";
    import HeaderComponent from "./frame/Header.vue";
    export default {
        components: {
            "app-aside": AsideComponent,
            "appHeader": HeaderComponent
        }
    }
</script>

<style scoped>
    .el-container {
        height: 100%;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: right;
        padding-right: 40px;
        height: 45px !important;
        line-height: 45px;
    }
    
    .el-aside {
        background-color: #D3DCE6;
        color: #333;

    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }
</style>