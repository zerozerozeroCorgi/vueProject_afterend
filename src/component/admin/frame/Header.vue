<template>
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                你好，{{user.uname}}<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item command="logout">注销登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
</template>

<script>
    export default {
        data() {
            return {
                user: JSON.parse(localStorage.getItem("user")) || {}
            }
        },
        methods: {
            logout() {
                this.$http.get(this.$api.logout)
                    .then(res => {
                        if (res.data.status == 0) {
                            localStorage.removeItem("user");
                            this.$router.push({name: "l"});
                        }
                    })
                
            },
            handleCommand(command) {
                this.logout();
            }
        }
    }
</script>

<style scoped>
    .el-dropdown-link {
        cursor: pointer;
    }
</style>