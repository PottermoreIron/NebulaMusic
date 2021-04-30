<template>
  <div class="foot-bar-right">
    <svg-icon
      icon-class="iconfont-yinliang"
      className="right-icon"
    />
    <svg-icon
      icon-class="iconfont-bofangliebiao"
      className="right-icon"
    />
  </div>
</template>

<script>
export default {
  name: "FootBarRight",
};
</script>

<style scoped>
.foot-bar-right {
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.right-icon {
  width: 1.3rem !important;
  height: 1.3rem !important;
  color: var(--foot-right-icon-color);
}
.right-icon:hover {
  cursor: pointer;
  color: var(--foot-right-hover-color);
}
</style>