<template>
  <div id="app">
    <home></home>
    <!-- <theme /> -->
  </div>
</template>
<script>
import Home from "./views/home/Home.vue";
import Theme from "./components/content/theme/Theme";

export default {
  name: "app",
  components: {
    Home,
    Theme,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
#app {
  height: 100%;
}
#explore-music {
  height: 100%;
}
</style>
