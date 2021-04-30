<template>
  <div class="foot-bar">
    <div class="left">
      <foot-bar-left />
    </div>
    <div class="center">
      <foot-bar-center />
    </div>
    <div class="right">
      <foot-bar-right />
    </div>
  </div>
</template>

<script>
import FootBarLeft from "../../content/footBarItem/footBarLeft/FootBarLeft";
import FootBarCenter from "../../content/footBarItem/footBarCenter/FootBarCenter";
import FootBarRight from "../../content/footBarItem/footBarRight/FoorBarRight";

export default {
  name: "FootBar",
  components: {
    FootBarLeft,
    FootBarCenter,
    FootBarRight,
  },
};
</script>

<style scoped>
.foot-bar {
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
}
.left,
.right,
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.left,
.right {
  width: 19vw;
}
.center {
  flex: 1;
}
</style>