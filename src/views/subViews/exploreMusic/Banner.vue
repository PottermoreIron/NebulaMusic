<template>
  <el-carousel
    :interval="4000"
    type="card"
    height="200px"
  >
    <el-carousel-item
      v-for="banner in banners"
      :key="banner.scm"
    >
      <img
        :src="$utils.getImgUrl(banner.imageUrl,1000,400)"
        class=banner-img
      >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "@/api/exploreMusic.js";
export default {
  name: "Banner",
  async created() {
    const { banners } = await getBanner();
    this.banners = banners;
  },
  data() {
    return {
      banners: [],
    };
  },
};
</script>

<style scoped>
.banner-img {
  width: 100%;
  border-radius: 0.7rem;
  height: 100%;
}
.el-carousel >>> .el-carousel__mask {
  background-color: var(--main-banner-img-bkg-color);
}
</style>