<template>
  <div class="recommend-list-item">
    <div class="img-wrap">
      <img :src="$utils.getImgUrl(img,300,300)" />
      <div
        class="desc-wrap"
        v-if="description"
      >
        <span class="desc">{{description}}</span>
      </div>
      <div class="play-icon-wrap">
        <svg-icon
          icon-class="iconfont-icon_play"
          class="play-icon"
        />
      </div>
    </div>
    <span class="name">{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "RecommendListsItem",
  props: ["id", "name", "description", "img"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend-list-item {
  position: relative;
  width: calc(20% - 0.8vw);
  margin: 0.4vw;
  margin-bottom: 2vh;
  cursor: pointer;
}
.img-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.3rem;
}
img {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.desc-wrap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  background-color: rgba(0, 0, 0, 0.4);
  text-align: left;
  transition: all 0.3s;
  padding: 0.5rem;
  opacity: 0;
}
.recommend-list-item:hover .desc-wrap {
  opacity: 1;
  transform: translateY(0);
}
.desc {
  color: white;
  font-size: 0.8rem;
}
.play-icon-wrap {
  opacity: 0;
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 10px;
  bottom: 10px;
  background: hsla(0, 0%, 100%, 0.5);
  border-radius: 50%;
  transition: all 0.3s;
}
.play-icon {
  color: red;
}
.recommend-list-item:hover .play-icon-wrap {
  opacity: 1;
}
.name {
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  /* 不换行 */
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.6rem;
  text-align: left;
}
</style>