<template>
  <div id="home">
    <el-container>
      <el-header height=3rem>
        <div class="header">
          <nav-bar />
        </div>
      </el-header>
      <el-container>
        <el-aside
          width=19vw
          class="aside"
        >
          <div>
            <side-bar>
              <side-bar-item path="/explore">
                <span
                  class="aliIcon iconfont-music"
                  slot="item-icon"
                ></span>
                <span slot="item-icon-active">
                  <svg-icon icon-class="iconfont-1_boombox" />
                </span>
                <span slot="item-text">发现音乐</span>
              </side-bar-item>
              <side-bar-item path="songList">
                <span
                  class="aliIcon iconfont-playlist"
                  slot="item-icon"
                ></span>
                <span slot="item-icon-active">
                  <svg-icon icon-class="iconfont-1_bag-full" />
                </span>
                <span slot="item-text">推荐歌单</span>
              </side-bar-item>
              <side-bar-item path="/newMusic">
                <span
                  class="aliIcon iconfont-planet"
                  slot="item-icon"
                ></span>
                <span slot="item-icon-active">
                  <svg-icon icon-class="iconfont-1_envelope" />
                </span>
                <span slot="item-text">最新音乐</span>
              </side-bar-item>
              <side-bar-item path="/newMV">
                <span
                  class="aliIcon iconfont-video"
                  slot="item-icon"
                ></span>
                <span slot="item-icon-active">
                  <svg-icon icon-class="iconfont-1_retro-tv" />
                </span>
                <span slot="item-text">最新MV</span>
              </side-bar-item>
            </side-bar>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
          <div class="main">
          </div>
        </el-main>
      </el-container>
      <el-footer height=10vh>
        <div class="footer">
          <foot-player>
          </foot-player>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import SideBar from "../../components/common/sideBar/SideBar";
import SideBarItem from "../../components/common/sideBar/SideBarItem";
import FootPlayer from "../../components/content/footPlayer/FootPlayer";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    NavBar,
    SideBar,
    SideBarItem,
    FootPlayer,
  },
  methods: {
    //   组件嵌套太深,vue无法检测到试图更新
    onInput() {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
#home {
  height: 100%;
}
.el-container {
  height: calc(100% - 3rem);
}
.el-header {
  background-color: var(--header-bkg-color);
  text-align: center;
  padding: 0px 0px 0px 0px;
}
.el-aside {
  height: calc(100% - 3rem);
  background-color: var(--aside-bkg-color);
}
.el-main {
  background-color: var(--main-bkg-color);
  color: var(--main-color);
  text-align: center;
  padding: 20px;
}
.el-main::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.1rem;
}
.el-main::-webkit-scrollbar-track {
  background-color: var(--main-scrollbar-track);
}
.el-main::-webkit-scrollbar-thumb {
  background-color: var(--main-scrollbar-thumb);
}
.el-footer {
  /*固定footer 防止双滚动条*/
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2021;
  background-color: var(--foot-bkg-color);
  color: var(--foot-song-color);
  text-align: center;
  padding: 0;
}
.header,
.footer {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.aside {
  height: 100%;
}

.footer {
  width: 100%;
  height: 100%;
  box-shadow: 0rem 0rem 0.05rem 0rem var(--foot-shadow-color) inset;
}
</style>