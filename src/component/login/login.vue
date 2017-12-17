<template>
    <div class="login">
        <div class="login_content">
            <section class="login_content_logo">
                <img src="../../img/logo.png" alt="">
            </section>
            <section class="login_content_form">

                <!-- 如果表单要进行校验，重置，则必须设置model属性，关联整个表单数据 -->
                <el-form :model="user" :rules="formRules" status-icon ref="ruleForm2" label-width="70px" class="demo-ruleForm">

                    <!-- 如果要校验输入框，重置，则必须设置prop属性，关联当前的input字段名 -->
                    <el-form-item label="用户名" prop="uname">
                        <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="upwd">
                        <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    uname: "",
                    upwd: ""
                },
                formRules: {
                    uname: [
                        {required: true, message: "请输入用户名", trigger: "blur"},
                        {pattern: /\w{5,18}/, message: "长度在 5 到 18 个字符, 且只能为&_或字母与数字", trigger: "blur"}
                        
                    ],
                    upwd: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {pattern: /.{6,18}/, message: "长度在 6 到 18 个字符", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            login() {
                this.$http.post(this.$api.login, this.user)
                        .then(res => {
                            let {status, message} = res.data;
                            if (status == 0) {
                                localStorage.setItem("user", JSON.stringify(message));
                                this.$router.push("/");
                            } else {
                                alert(message);
                            }
                        });
            },
            submitForm(formName) {
                this.$refs[formName].validate((vali) => {
                    if (vali) {
                       this.login();
                    } else {
                        alert("别乱点！！！");
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    .login {
        height: 100%;
        background-color: #267cb7;
        &_content {
            width: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -90%);
            &_logo {
                text-align: center;
            }
            &_form {
                border: 1px solid hsla(0,0%,100%,.2);
                padding: 10px 10px;
                border-radius: 5px;
            }
        }
        
    }
    
</style>