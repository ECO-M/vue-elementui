<template>
  <div class="nav">
    <el-menu
      :collapse="isCollapse"
      :router="true"
      :unique-opened="true"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu v-for="(item,index) in navgroup" :index="index+''" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item
          v-for="(sonItem,sonIndex) in item.sonMenu"
          :index="sonItem.router.path+''"
          :key="sonIndex"
        >{{sonItem.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import navgroup from "../utils/menuMixin";
export default {
  // mixins: [navgroup],
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  computed: {
    navgroup() {
      return this.$store.state.navgroup;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less" scoped>
.nav {
  float: left;
  height: calc(100vh - 70px);
  background-color: #545c64;
  overflow: auto;
}
.el-menu {
  border-right: none;
}
</style>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

