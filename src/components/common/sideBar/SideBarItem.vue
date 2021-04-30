<template>
  <div
    class="side-bar-item"
    @click="menuClick"
    :class="{active:isActive}"
  >
    <span
      v-if="!isActive"
      class="item-icon"
    >
      <slot name="item-icon"></slot>
    </span>
    <span
      v-else
      class="item-icon-active"
    >
      <slot name="item-icon-active"></slot>
    </span>
    <span
      class="item-text"
      :class="{activeTextClass:isActive}"
    >
      <slot name="item-text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    path: String,
    // 封装成组件按照传进来的参数进行颜色的确定
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      //   路径判断是否选中
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
  methods: {
    menuClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped>
.side-bar-item {
  height: 7vh;
  line-height: 7vh;
}
/* 有一个空格是子元素,没有空格才是父元素 */
.side-bar-item:hover {
  background-color: var(--aside-hover-color);
  cursor: pointer;
}
.item-icon,
.item-icon-active {
  margin-left: 2vw;
}
.item-icon {
  color: var(--aside-icon-color);
}
.item-text {
  margin-left: 1vw;
  font-size: 0.8rem;
  color: var(--aside-font-color);
}
.active {
  background-color: var(--aside-active-color);
  color: var(--aside-font-active-color);
}
.activeTextClass {
  color: var(--aside-font-active-color);
}
</style>