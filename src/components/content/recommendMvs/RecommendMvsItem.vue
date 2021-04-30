<template>
  <div class="mv-item">
    <div class="img-wrap">
      <img :src="$utils.getImgUrl(img,500,260)" />
      <div class="count">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="play-icon-count"
        />
        {{count}}
      </div>
      <div class="play-icon-wrap">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="play-icon"
        />
      </div>
      <div class="mv-duration">
        {{ $utils.formatTime(duration) }}
      </div>
    </div>
    <div class="mv-text">
      <p class="name">{{name}}</p>
      <p class="artists-name">{{artists}}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecommendMvsItem",
  props: ["id", "name", "artists", "img", "duration", "count"],
};
</script>

<style scoped>
.mv-item {
  position: relative;
}
.img-wrap {
  cursor: pointer;
  position: relative;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}
.img-wrap:hover .play-icon-wrap {
  opacity: 1;
}
.img-wrap:hover .count {
  opacity: 1;
}
.play-icon-count {
  width: 0.8rem;
  height: 0.8rem;
}
.count {
  opacity: 0;
  position: absolute;
  left: 75%;
  top: 7%;
  font-size: 0.4rem;
  color: var(--main-mv-count-color);
  transition: all 0.3s;
}
.play-icon-wrap {
  opacity: 0;
  position: absolute;
  width: 2.1rem;
  height: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  margin-left: -1.05rem;
  margin-top: -1.05rem;
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 1rem;
  transition: all 0.8s;
}
.play-icon {
  color: var(--main-mv-play-icon-color);
}
.mv-duration {
  position: absolute;
  left: 82%;
  bottom: 8%;
  font-size: 0.8rem;
  color: var(--main-mv-duration-color);
}
.mv-text {
  text-align: left;
}
.name {
  font-size: 0.8rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--main-mv-name-color);
}
.artists-name {
  font-size: 0.5rem;
  padding-top: 0.4rem;
  color: var(--main-mv-artists-color);
}
</style>