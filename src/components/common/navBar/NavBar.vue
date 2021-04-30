<template>
  <div class="nav-bar">
    <div class="left">
      NebulaMusic
    </div>
    <div class="center">
      <nav-bar-router-ctr />
      <span class=myInput>
        <el-input
          v-model="test"
          clearable
          placeholder="搜索"
          prefix-icon="el-icon-search"
          @input="onInput()"
        />
      </span>
      <div class="hover-icon">
        <!-- <svg-icon -->
        <!-- icon-class="iconfont-zhuti" -->
        <!-- className="topic-icon" -->
        <!-- /> -->
        <Theme />
      </div>
    </div>
    <div class="right">
      <span class="divide-sign">|</span>
      <div class="control">
        <svg-icon
          icon-class="iconfont-suoxiao"
          className="control-icon"
          @click.native="existFullPage"
        />
        <svg-icon
          icon-class="iconfont-zuida1"
          className="control-icon"
          @click.native="requestFullPage"
        />
        <svg-icon
          icon-class="iconfont-home"
          className="control-icon"
          @click.native="goHome"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavBarRouterCtr from "../../content/navBarRouterCtr/NavBarRouterCtr";
import Theme from "../../content/theme/Theme";
import {
  requestFullScreen,
  existFullScreen,
  isFullScreen,
} from "../../../utils/screenControl";
export default {
  name: "NavBar",
  data() {
    return {
      test: "",
    };
  },
  components: {
    NavBarRouterCtr,
    Theme,
  },
  methods: {
    onInput() {
      this.$forceUpdate;
    },
    requestFullPage() {
      requestFullScreen(document.documentElement);
    },
    existFullPage() {
      if (isFullScreen()) {
        existFullScreen();
      }
    },
    goHome() {
      this.$router.push("/explore");
    },
  },
};
NavBarRouterCtr;
</script>

<style scoped>
@import "~@/assets/fonts//GoogleFonts/fonts.css";
.nav-bar {
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
  color: var(--header-font-color);
  background-color: var(--header-bkg-color);
}
.left,
.right {
  display: flex;
  align-items: center;
  width: 19vw;
}
.left {
  font-family: "Dancing Script";
  justify-content: center;
  font-size: 2rem;
  color: white;
}
.center {
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--header-icon-color);
}

/* 穿透魔改element-ui样式 */
.myInput >>> .el-input {
  width: 14vw;
  border-radius: 2rem;
}
.myInput >>> .el-input__inner {
  height: 2rem;
  border-radius: 2rem;
  border-color: var(--header-bkg-color);
  color: var(--header-input-color);
  background-color: var(--header-input-bkg-color);
}
.myInput >>> .el-input__inner::placeholder {
  color: var(--header-input-phr-color);
}
.myInput >>> .el-input__inner:focus {
  border-color: var(--header-input-active-color);
}
.myInput >>> .el-input__icon {
  line-height: 2rem;
}
.myInput {
  padding-left: 1vw;
}
.topic-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
  vertical-align: -0.5rem;
}
.hover-icon {
  width: 2.2vw;
  height: 2.2vw;
  margin-left: 36vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hover-icon:hover {
  background-color: var(--round-hover-bkg-color);
  border-radius: 50%;
  cursor: pointer;
}

.divide-sign {
  color: var(--header-divide-sign);
}
.control {
  display: inline-flex;
  vertical-align: middle;
  justify-content: space-around;
  color: var(--header-control-icon-color);
  width: 18vw;
}
.control-icon:hover {
  color: var(--header-control-icon-hover-color);
  cursor: pointer;
}
</style>