<template>
  <div id="side-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
#side-bar {
  display: flex;
  flex-direction: column;
}
.side-bar-item {
  height: 7vh;
  line-height: 7vh;
}
</style>