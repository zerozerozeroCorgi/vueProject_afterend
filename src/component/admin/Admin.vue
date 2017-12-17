<template>
    <el-container>
        
        <!-- 左侧 -->
        <el-aside width="200px">

            <!-- 左侧导航，公共部分 -->
            <app-aside></app-aside>
        </el-aside>

        <!-- 右侧 -->
        <el-container>

            <!-- 右侧头部，公共部分 -->
            <el-header>Header</el-header>

            <!-- 右侧主体，变化部分 -->
            <el-main></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import AsideComponent from "./frame/Aside.vue";
    export default {
        components: {
            "app-aside": AsideComponent
        }
    }
</script>

<style scoped>

</style>