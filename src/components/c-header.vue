<template>
  <div class="header">
    <div :class="img">
      <img class="logo" src="../assets/logo.png" alt>
    </div>
    <div class="header-bar">
      <div class="icon">
        <i :class="icon" @click="menuControl"></i>
      </div>
      <div class="user">
        <div class="full">
          <el-tooltip class="item" effect="dark" content="进入全屏" placement="bottom">
            <i class="el-icon-full-screen" @click="enterFull"></i>
          </el-tooltip>
        </div>
        <div class="msg">
          <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <i class="el-icon-message-solid" @click="enterMsg"></i>
          </el-tooltip>
        </div>
        <div class="topic">
          <el-tooltip class="item" effect="dark" content="切换主题" placement="bottom">
            <i class="el-icon-s-home" @click="changeTopic"></i>
          </el-tooltip>
        </div>
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">
            <img src="../assets/logo.png">
            <span style="color:#fff">你好,admin</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="setting">设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      isFullscreen: false,
      iconClick: false,
      img: "openMenu",
      icon: "el-icon-s-fold" //el-icon-s-fold关
    };
  },
  methods: {
    menuControl() {
      if (!this.iconClick) {
        this.iconClick = true;
        this.img = "closeMenu";
        this.icon = "el-icon-s-unfold";
      } else {
        this.iconClick = false;
        this.img = "openMenu";
        this.icon = "el-icon-s-fold";
      }
      this.$emit("menuControl");
    },
    enterFull() {
      if (!screenfull.enabled) {
        this.$message({
          message: "Your browser does not work",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = true
    },
    enterMsg(){

    },
    changeTopic(){

    },
    setting(){
      this.$router.push("/home/setting")
    },
    logout(){
        this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 70px;
  background: #545c64;
  display: flex;

  .openMenu {
    width: 200px;
    height: 70px;
    transition: all 0.3s ease-in-out;
    text-align: center;
    .logo {
      width: 64px;
      height: 64px;
      vertical-align: middle;
      transform: scale(1);
      transition: all 0.3s linear;
    }
  }
  .closeMenu {
    width: 64px;
    height: 70px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    .logo {
      width: 64px;
      height: 64px;
      vertical-align: middle;
      transform: scale(0.6);
      transition: all 0.3s linear;
    }
  }
  .header-bar {
    display: flex;
    flex: 1;
    justify-content: space-between;
    line-height: 70px;
    i {
      color: #ffd04b;
    }
    .icon {
      font-size: 28px;
      padding-left: 20px;
    }
    .user {
      display: flex;
      div {
        margin: 0 10px;
      }
      .full {
        font-size: 18px;
      }
      .msg {
        font-size: 20px;
      }
      .topic {
        font-size: 20px;
      }
      .userinfo-inner {
        display: inline-block;
        width: 160px;
        height: 70px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>

