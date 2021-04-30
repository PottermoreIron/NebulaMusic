<template>
  <div class=foot-bar-left>
    <template v-if="hasCurrentSong">
      <div
        @click="showPlayer"
        class="img-wrap"
      >
        <div class="img-mask"></div>
        <img :src="$utils.getImgUrl(currentSong.img,80)" />
        <div class="player-unfold-icon"></div>
      </div>
      <div class="text">
        <div clss="song-info">
          <p class="name">{{currentSong.name}}</p>
          <p class="split">-</p>
          <p class="artists">{{currentSong.artistsText}}</p>
        </div>
      </div>
      <div class="time">
        <span class="duration-time">{{}}</span>
        <span class="total-time">{{}}</span>
      </div>
    </template>
  </div>

</template>

<script>
import { isDef } from "@/utils";
import { mapState } from "@/store/helper/music";
export default {
  name: "FootBarLeft",
  methods: {
    showPlayer() {},
  },
  computed: {
    hasCurrentSong() {
      return isDef(this.currentSong.id);
    },
    ...mapState(["currentSong", "currentTime", "playing"]),
  },
};
</script>

<style scoped>
</style>