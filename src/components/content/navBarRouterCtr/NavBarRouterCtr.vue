<template>
  <div class="nav-router-ctr">
    <div class="left-icon">
      <svg-icon
        icon-class="iconfont-jiantouarrowhead7"
        @click.native="goBack"
      />
    </div>
    <div class="right-icon">
      <svg-icon
        icon-class="iconfont-jiantouarrow487"
        @click.native="goForward"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "NacBarRouterCtr",
  methods: {
    goBack() {
      this.$router.back();
    },
    goForward() {
      this.$router.forward();
    },
  },
};
</script>

<style scoped>
.nav-router-ctr {
  display: flex;
  margin-left: 2vw;
}
.left-icon,
.right-icon {
  width: 2.2vw;
  height: 2.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-icon:hover,
.right-icon:hover {
  background-color: var(--round-hover-bkg-color);
  border-radius: 50%;
  cursor: pointer;
}
.right-icon {
  margin-left: 2vw;
}
</style>