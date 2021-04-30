<template>
  <div class="playlist-item">
    <div class="img-wrap">
      <img :src="$utils.getImgUrl(img,300)" />
      <div class="desc-wrap">
        <span class="description">{{description}}</span>
      </div>
      <div class="play-icon-wrap">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="play-icon"
        />
      </div>
      <div class="creator-wrap">
        <div class="creator-img-wrap">
          <img :src="creatorImg" />
        </div>
        <p class="creator-name">{{creatorName}}</p>
      </div>
      <div class="play-count-wrap">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="count-play-icon"
        />
        <span class="play-count">{{playCount}}</span>
      </div>
    </div>
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "PlaylistItem",
  props: [
    "id",
    "img",
    "name",
    "description",
    "creatorName",
    "creatorImg",
    "playCount",
  ],
};
</script>

<style scoped>
.playlist-item {
  width: 20%;
  padding: 0.3rem;

  text-align: left;
  cursor: pointer;
  margin-bottom: 3vh;
}
.img-wrap {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-top-right-radius: 11px;
  border-top-left-radius: 11px;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 11px;
}

.play-icon-wrap {
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  right: 10px;
  bottom: 10px;
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 50%;
  transition: all 0.4s;
}
.play-icon {
  color: var(--main-playlist-item-play-icon-color);
}
.playlist-item:hover .play-icon-wrap {
  opacity: 1;
}

.creator-wrap {
  opacity: 0;
  position: absolute;
  height: 30px;
  display: flex;
  align-items: center;
  left: 4px;
  bottom: 10px;
  width: calc(100% - 70px);
  transition: all 0.9s;
}
.creator-wrap .creator-img-wrap {
  width: 30px;
}
.creator-img-wrap img {
  border-radius: 50%;
}
.creator-wrap .creator-name {
  font-size: 10px;
  color: var(--main-playlist-item-creator-name);
  width: calc(100% - 30px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 7px;
}
.playlist-item:hover .creator-wrap {
  opacity: 1;
}
.play-count-wrap {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 20%;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
}
.playlist-item:hover .play-count-wrap {
  transform: translateY(0);
}
.count-play-icon {
  color: var(--main-playlist-item-count-play-icon-color);
}
.play-count {
  font-size: 0.4rem;
  color: var(--main-playlist-item-play-count-color);
  margin-left: 3%;
}
.name {
  color: var(--main-playlist-item-name);
  font-size: 0.6rem;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>