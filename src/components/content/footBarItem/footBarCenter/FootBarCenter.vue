<template>
  <div class="foot-bar-center">
    <div class="play">
      <div class="control">
        <div class="list-control">
          <svg-icon
            icon-class="iconfont-danquxunhuan"
            className="center-icon "
          />
        </div>
        <div class="last-song">
          <svg-icon
            icon-class="iconfont-shangyishou"
            className="center-icon"
            @click="prev"
          />
        </div>
        <div class="play-control">
          <svg-icon
            icon-class="iconfont-play"
            className="center-icon"
          />
        </div>
        <div class="next-song">
          <svg-icon
            icon-class="iconfont-xiayishou"
            className="center-icon"
            @click.native="next"
          />
        </div>
        <div class="word">
          <svg-icon
            icon-class="iconfont-geci"
            className="center-icon"
          />
        </div>
      </div>
      <div class="time line">
        timeline
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
} from "@/store/helper/music";
export default {
  name: "FootBarCenter",
  props: ["songReady"],
  methods: {
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
    ...mapActions(["startSong"]),
  },
  computed: {
    ...mapState(["playing"]),
    ...mapGetters(["prevSong", "nextSong"]),
  },
};
</script>

<style>
.foot-bar-center {
  width: 35%;
}
.control {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.center-icon {
  width: 1.2rem !important;
  height: 1.2rem !important;
  color: var(--foot-center-icon-color);
}
.center-icon:hover {
  color: var(--foot-center-hover-color);
  cursor: pointer;
}
.play-control .center-icon:hover {
  color: var(--foot-icon-color);
}
.play-control .center-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
.play-control:hover {
  cursor: pointer;
}
.list-control,
.last-song,
.play-control,
.next-song,
.word {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5vh;
  height: 5vh;
}
.play-control {
  border-radius: 50%;
  background-color: var(--foot-player-bkg-color);
}
.play-control:hover {
  background-color: var(--foot-player-hover-color);
}
</style>