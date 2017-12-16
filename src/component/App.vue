<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "测试"
            }
        }
    }
</script>

<style scoped>
    div {
        font-size: 30px;
        font-weight: 600
    }
</style>