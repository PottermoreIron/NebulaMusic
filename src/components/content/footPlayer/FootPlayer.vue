<template>
  <div class="foot-player">
    <div class="left">
      <foot-bar-left />
    </div>
    <div class="center">
      <foot-bar-center :songReady="songReady" />
    </div>
    <div class="right">
      <foot-bar-right />
    </div>
    <audio
      :src="currentSong.url"
      @canplay="ready"
      @ended="end"
      @timeupdate="updateTime"
      ref="audio"
    ></audio>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
} from "@/store/helper/music";
import FootBarLeft from "../footBarItem/footBarLeft/FootBarLeft";
import FootBarCenter from "../footBarItem/footBarCenter/FootBarCenter";
import FootBarRight from "../footBarItem/footBarRight/FoorBarRight";

export default {
  name: "FootPlayer",
  data() {
    return {
      isPlayErrorPromptShow: false,
      songReady: false,
    };
  },
  components: {
    FootBarLeft,
    FootBarCenter,
    FootBarRight,
  },
  methods: {
    ready() {
      this.songReady = true;
    },
    async play() {
      if (this.songReady) {
        try {
          await this.audio.play();
          if (this.isPlayErrorPromptShow) {
            this.isPlayErrorPromptShow = false;
          }
        } catch (error) {
          // 提示用户手动播放
          this.isPlayErrorPromptShow = true;
          this.setPlayingState(false);
        }
      }
    },
    updateTime(e) {
      const time = e.target.currentTime;
      this.setCurrentTime(time);
    },
    prev() {
      if (this.songReady) {
        this.startSong(this.prevSong);
      }
    },
    next() {
      if (this.songReady) {
        this.startSong(this.nextSong);
      }
    },
    end() {
      this.next();
    },
    ...mapMutations([
      "setCurrentTime",
      "setPlayingState",
      "setPlayMode",
      "setPlaylistShow",
      "setPlayerShow",
    ]),
    ...mapActions(["startSong"]),
  },
  watch: {
    currentSong(newSong, oldSong) {
      console.log("currentSong");
      console.log(newSong);
      console.log(oldSong);
      // 清空了歌曲
      if (!newSong.id) {
        this.audio.pause();
        this.audio.currentTime = 0;
        return;
      }
      // 单曲循环
      if (oldSong && newSong.id === oldSong.id) {
        this.setCurrentTime(0);
        this.audio.currentTime = 0;
        this.play();
        return;
      }
      this.songReady = false;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.play();
      }, 1000);
    },
    playing(newPlaying) {
      this.$nextTick(() => {
        newPlaying ? this.play() : this.pause();
      });
    },
  },
  computed: {
    audio() {
      return this.$refs.audio;
    },
    ...mapState([
      "currentSong",
      "currentTime",
      "playing",
      "playMode",
      "isPlaylistShow",
      "isPlaylistPromptShow",
      "isPlayerShow",
    ]),
    ...mapGetters(["prevSong", "nextSong"]),
  },
};
</script>

<style scoped>
.foot-player {
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