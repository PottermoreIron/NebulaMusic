<template>
  <div class="recommend-wrap">
    <div
      class="title"
      v-if="lists.length"
    >
      <span>推荐歌单</span>
    </div>
    <div class="recommend-list">
      <recommend-lists-item
        :id="item.id"
        :name="item.name"
        :img="item.picUrl"
        :description="item.copywriter"
        :key="item.id"
        v-for="item in lists"
      />
    </div>
  </div>
</template>

<script>
import { getPersonalized } from "@/api/exploreMusic.js";
import RecommendListsItem from "@/components/content/recommendLists/RecommendListsItem";
export default {
  name: "RecommendLists",
  components: {
    RecommendListsItem,
  },
  async created() {
    const { result } = await getPersonalized({ limit: 10 });
    this.lists = result;
  },
  data() {
    return {
      lists: [],
    };
  },
};
</script>

<style scoped>
.recommend-wrap {
  margin-top: 4vh;
  text-align: left;
}
.title {
  font-size: 1rem;
  padding-left: 0.5vw;
}
.recommend-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5vh;
}
</style>