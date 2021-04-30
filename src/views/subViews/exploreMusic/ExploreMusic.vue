<template>
  <div id="explore-music">
    <banner />
    <recommend-lists />
    <new-songs />
    <recommend-mvs />
  </div>
</template>

<script>
import Banner from "./Banner";
import RecommendLists from "./RecommendLists";
import NewSongs from "./NewSongs";
import RecommendMvs from "./RecommendMvs";

export default {
  components: {
    Banner,
    RecommendLists,
    NewSongs,
    RecommendMvs,
  },
};
</script scoped>

<style scoped>
#explore-music {
  height: 100%;
}
</style>