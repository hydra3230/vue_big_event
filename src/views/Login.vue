<script setup>
import { User, Lock } from 'element-plus';
import { ref } from 'vue';
//控制注册和登录表单的显示
const isRegister = ref(false)
</script>

<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form"></el-col>
        <!--注册表单-->
        <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
            <el-form-item>
                <h1>Register</h1>
            </el-form-item>
            <el-form-item>
                <el-input :prefix-icon="User" placeholder="Pls input user name."></el-input>
            </el-form-item>
            <el-form-item>
                <el-input :prefix-icon="Lock" placeholder="Pls input user pwd."></el-input>
            </el-form-item>
            <el-form-item>
                <el-input :prefix-icon="Lock" placeholder="Pls input user pwd again."></el-input>
            </el-form-item>
            <!--注册按钮-->
            <el-form-item>
                <el-button class="button" type="primary" auto-insert-space>Register</el-button>
            </el-form-item>
            <el-form-item class="flex">
                <el-link type="info" :underline="false" @click="isRegister = false">...Back</el-link>
            </el-form-item>
        </el-form>
        //登录表单
        <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
            <el-form-item>
                <h1>Login</h1>
            </el-form-item>
            <el-form-item>
                <el-input :prefix-icon="User" placeholder="Pls input user name."></el-input>
            </el-form-item>
            <el-form-item>
                <el-input :prefix-icon="Lock" placeholder="Pls input user pwd."></el-input>
            </el-form-item>
            <el-form-item class="flex">
                <div class="flex">
                    <el-checkbox>Remember me</el-checkbox>
                    <el-link type="primary" :underline="false">Forget password?</el-link>
                </div>
            </el-form-item>
            <!--登录按钮-->
            <el-form-item>
                <el-button class="button" type="primary" auto-insert-space>Login</el-button>
            </el-form-item>
            <el-form-item class="flex">
                <el-link type="info" :underline="false" @click="isRegister = true">Register...</el-link>
            </el-form-item>
        </el-form>
        
    </el-row>
</template>

<style lang="scss" scoped>
//样式
.login-page{
    height: 100vh;
    background-color: #fff;
    .bg{
        background: url('@/assets/background.png') no-repeat center;
        border-radius: 0 20px 20 px 0;
    }

    .form{
        display: flex;
        flex-direction:column;
        justify-content: center;
        user-select:none;

        .title{
            margin:0 auto;
        }

        .button{
            width:100%;
        }

        .flex{
            width:100%;
            display: flex;
            justify-content: space-between;
        }

    }
}
</style>
