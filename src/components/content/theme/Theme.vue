<template>
  <div class="theme">
    <el-popover
      placement="top"
      v-model="visible"
    >
      <div class="themes">
        <div
          :key="index"
          @click="changeTheme(themeKey)"
          v-for="(themeValue,themeKey,index) in themeArr"
          class="theme-content"
        >
          <div
            :style="themeValue.style"
            class="theme-icon"
          ></div>
          <p>{{themeValue.title}}</p>
        </div>
      </div>
      <svg-icon
        icon-class="iconfont-zhuti"
        slot="reference"
        className="control-theme-icon"
      />
    </el-popover>
  </div>
</template>

<script>
import themeBlack from "../../../assets/js/theme/theme-black";
import themeRed from "../../../assets/js/theme/theme-red";
import storage from "good-storage";
const THEME_KEY = "__theme__";
const themes = {
  dark: "dark",
  red: "red",
};
export default {
  created() {
    this.themeArr = {
      [themes.dark]: {
        title: "深色",
        file: themeBlack,
        style: {
          backgroundColor: "#202023",
        },
      },
      [themes.red]: {
        title: "经典",
        file: themeRed,
        style: {
          backgroundColor: "#d74c45",
        },
      },
    };
    this.changeTheme(storage.get(THEME_KEY, themes.red));
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    changeTheme(themeKey) {
      storage.set(THEME_KEY, themeKey);
      const theme = this.themeArr[themeKey].file;
      Object.keys(theme).forEach((key) => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
      });
    },
  },
};
</script>

<style scoped>
.themes {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.theme-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.theme-content:hover {
  cursor: pointer;
}
.theme-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.control-theme-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
.control-theme-icon:hover {
  cursor: pointer;
}
</style>