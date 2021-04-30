<template>
  <div class="top-list-item-wrap">
    <div class="top-list-item">
      <div class="img-wrap">
        <img :src="$utils.getImgUrl(img,280)" />
      </div>
      <div class="text">
        <div class="tag-wrap">
          <span>精品歌单</span>
        </div>
        <p class="name">{{name}}</p>
        <p class="description">{{description}}</p>
      </div>
    </div>
    <div
      class="background"
      :style="{ backgroundImage: `url(${img})` }"
    >
    </div>
    <div class="background-mask"></div>
  </div>
</template>

<script>
export default {
  name: "TopListItem",
  props: ["id", "img", "name", "description"],
};
</script>

<style scoped>
.top-list-item-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-bottom: 5vh;
}
.top-list-item {
  position: relative;
  display: flex;
  z-index: 1;
  padding: 1rem;
}
.img-wrap {
  width: 150px;
}
.img-wrap img {
  width: 100%;
}
.text {
  width: calc(100% - 140px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.background,
.background-mask {
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: 0;
  border-radius: 0.5rem;
}
.background {
  filter: blur(16px);
}
.background-mask {
  background-color: rgba(0, 0, 0, 0.5);
}
.tag-wrap {
  font-size: 0.9rem;
  border: 0.07rem solid #e7aa5a;
  padding: 0.2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 0.2rem;
  margin-left: 0.7rem;
  margin-bottom: 1.1rem;
  color: var(--main-playlists-top-tag-color);
}
.name {
  margin-left: 0.8rem;
  margin-bottom: 0.5rem;
  color: var(--main-playlists-top-name-color);
}
.description {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  font-size: 0.4rem;
  margin-left: 0.7rem;
  text-align: left;
  color: var(--main-playlists-top-description-color);
}
</style>