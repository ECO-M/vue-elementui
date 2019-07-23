<template>
  <div class="home">
    <Head @menuControl="menuControl"/>
    <div class="container">
      <Nav :isCollapse="isCollapse"/>
      <div class="router">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Head: () => import("../components/c-header.vue"),
    Nav: () => import("../components/c-nav.vue")
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    menuControl() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>


<style lang="less" scoped>
.router {
  overflow: auto;
  height: calc(100vh - 70px);
  padding: 15px;
  box-sizing: border-box;
}
</style>
