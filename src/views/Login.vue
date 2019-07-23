<template>
  <div class="login">
    <div class="form">
      <div class="logo">
        <h2>xx后台管理系统</h2>
      </div>
      <div class="form-item">
        <el-input placeholder="请输入账号" v-model="loginInfo.userName">
          <template slot="prepend">账号</template>
        </el-input>
      </div>
      <div class="form-item">
        <el-input type="password" placeholder="请输入密码" v-model="loginInfo.passWord">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <div class="btnlist">
        <el-button @click="login" style="margin-left:69px" class="btn" type="primary">登 陆</el-button>
        <el-button @click="reset" class="btn" type>重 置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../http/http';
export default {
  data() {
    return {
      loginInfo: {
        userName: "15842625530",
        passWord: "123456"
      }
    };
  },
  methods: {
    login() {
      for (let index in this.loginInfo) {
        if (!this.loginInfo[index]) {
            this.$message.warning("登陆信息不能为空")
            return
        }
        //登陆逻辑
        this.$store.dispatch("login",this.loginInfo)
      }
    },
    reset() {
      for (let index in this.loginInfo) {
        this.loginInfo[index] = "";
      }
      this.$message.success("重置成功");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  //   background-image: linear-gradient(160deg, #ffce00 20%, #ff8b00 80%);
  background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  .form {
    width: 400px;
    height: 500px;
    border-radius: 10px;
    // background: white;
    // background-image: linear-gradient(160deg, #b100ff 20%,#00b3ff 80%);
    // background-image: linear-gradient(160deg, #ffce00 20%, #ff8b00 80%);
    background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
    padding: 0 10px;
    .logo {
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: white;
    }
    .form-item {
      margin: 10px 0;
    }
    .btnlist {
      text-align: left;
      margin: 20px 0;
      .btn {
        width: 100px;
      }
    }
  }
}
</style>

