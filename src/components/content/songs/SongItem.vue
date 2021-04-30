<template>
  <div class="new-songs-item">
    <div class="index-wrap">
      <span class="indexNumber">{{$utils.pad(indexNum)}}</span>
    </div>
    <div class="img-wrap">
      <img :src="$utils.getImgUrl(img,120)">
      <div class="play-icon-wrap">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="play-icon"
        />
      </div>
    </div>
    <div class="song-wrap">
      <span class="song-name">{{name}}</span>
      <span class="song-artists">{{artistsText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongItem",
  props: ["indexNum", "name", "img", "artistsText"],
};
</script>

<style scoped>
.new-songs-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 2vh;
  font-size: 0.6rem;
  color: darkgray;
  position: relative;
}
.new-songs-item:hover {
  background-color: var(--main-song-item-hover-color);
}
.index-wrap {
  padding-right: 1vw;
  padding-left: 1vw;
  color: var(--main-song-index-color);
}
.img-wrap {
  width: 15%;
  padding: 0.3rem;
  position: relative;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}
.song-wrap {
  text-align: left;
  padding-left: 1vw;
}
.song-name {
  display: block;
  color: var(--main-song-name-color);
  font-size: 0.8rem;
  padding-bottom: 0.6rem;
}
.song-artists {
  color: var(--main-song-artists-color);
}
.play-icon-wrap {
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.5);
  left: 50%;
  top: 50%;
  margin-left: -0.8rem;
  margin-top: -0.8rem;
  opacity: 0;
  transition: all 0.4s;
}
.new-songs-item:hover .play-icon-wrap {
  opacity: 1;
}
.play-icon {
  color: #f1372d;
}
</style>>

