<template>
  <ul
    :class="{[align]:true}"
    class="tab-wrap"
  >
    <template v-if="Switchable">
      <router-link
        :active-class="`${ROUTE_ACTIVE_CLS} ${activeItemClass}`"
        :key="index"
        :style="getItemStyle(tab,index)"
        :to="tab.to"
        ref="routerLinks"
        tag="li"
        v-for="(tab,index) in normalizedTabs"
        class="tab-item"
      >
        <span class="title">{{tab.title}}</span>
      </router-link>
    </template>
    <template v-else>
      <li
        :class="getItemCls(tab,index)"
        :key="index"
        :style="getItemStyle(tab,index)"
        @click="onChangeTab(tab,index)"
        class="tab-item"
        v-for="(tab,index) in normalizedTabs"
      >
        <span class="tilte">{{tab.title}}</span>
      </li>
    </template>
  </ul>
</template>

<script>
import { isDef } from "@/utils/common.js";
// ACTIVE_PROP应该是指被选中的tab的index
const ACTIVE_PROP = "active";
const ACTIVE_CHANGE = "tabChange";
const ROUTE_ACTIVE_CLS = "active";
export default {
  name: "Tabs",
  props: {
    [ACTIVE_PROP]: {
      type: Number,
      default: 0,
    },
    // 存储tab的数组
    tabs: {
      type: Array,
      // 不清楚default为什么会这样
      // 查了一下大概是Array的固定写法
      default: () => [],
    },
    // tab布局方式
    align: {
      type: String,
      default: "left",
    },
    itemStyle: {
      type: Object,
      default: () => ({}),
    },
    activeItemStyle: {
      type: Object,
      default: () => ({}),
    },
    itemClass: {
      type: String,
    },
    activeItemClass: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  model: {
    prop: ACTIVE_PROP,
    event: ACTIVE_CHANGE,
  },
  created() {
    this.ROUTE_ACTIVE_CLS = ROUTE_ACTIVE_CLS;
  },
  methods: {
    onChangeTab(tab, index) {
      if (this.Switchable) {
        this.$router.push(tab.to);
      } else {
        // 子组件向父组件传值,$emit(function,params) function是父组件的函数(v-on:function:父组件自定义函数),params是传递的参数
        this.$emit(ACTIVE_CHANGE, index);
      }
    },
    isActive(tab, index) {
      if (this.Switchable) {
        const {
          resolved: { path: resolvedPath },
        } = this.$router.resolve(tab.to);
        return resolvedPath === this.$route.path;
      } else {
        return index === this[ACTIVE_PROP];
      }
    },
    getItemCls(tab, index) {
      let base = [];
      if (this.itemClass) {
        base.push(this.itemClass);
      }
      if (this.type) {
        base.push(this.type);
      }
      if (this.isActive(tab, index)) {
        if (this.activeItemClass) {
          base.push(this.activeItemClass);
        }
        base.push("active");
      }
      return base.join(" ");
    },
    getItemStyle(tab, index) {
      return Object.assign(
        {},
        this.itemStyle,
        this.isActive(tab, index)
          ? Object.assign({}, this.activeItemStyle)
          : null
      );
    },
  },
  computed: {
    Switchable() {
      return this.tabs.length && isDef(this.tabs[0].to);
    },
    normalizedTabs() {
      return typeof this.tabs[0] === "string"
        ? this.tabs.map((tab) => ({ title: tab }))
        : this.tabs;
    },
  },
};
</script>

<style scoped>
.tab-wrap {
  display: flex;
  list-style: none;
}
.tab-item {
  margin-right: 1rem;
  font-size: 0.8rem;
  color: var(--main-playlists-tabs-color);
  cursor: pointer;
}
.active {
  color: var(--main-playlist-tabs-active-color) !important;
}
.tab-item:hover {
  color: var(--main-playlist-tabs-hover-color);
}
</style>