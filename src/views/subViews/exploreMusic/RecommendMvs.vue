<template>
  <div class="new-mvs">
    <div
      class="title"
      v-if="mvLists.length"
    >
      <span>
        推荐MV
      </span>
    </div>
    <ul class=mv-lists-wrap>
      <li
        v-for="mv in mvLists"
        class="mv-lists"
        :key="mv.id"
      >
        <recommend-mvs-item
          :name="mv.name"
          :img="mv.picUrl"
          :artists="mv.artistName"
          :duration="mv.duration"
          :count="mv.playCount"
          class="mvs-item"
        />
      </li>
    </ul>
    <div class="test">
    </div>
  </div>
</template>

<script>
import RecommendMvsItem from "../../../components/content/recommendMvs/RecommendMvsItem";
import { getPersonalizedMvs } from "@/api/exploreMusic";
export default {
  name: "RecommendMvs",
  components: {
    RecommendMvsItem,
  },
  async created() {
    const res = await getPersonalizedMvs();
    this.mvLists = res.result;
    console.log(this.mvLists);
  },
  data() {
    return {
      mvLists: [],
    };
  },
};
</script>

<style scoped>
.test {
  padding-bottom: 10vh;
}
.mv-lists-wrap {
  padding: 0.5vw;
}
.title {
  text-align: left;
}
.mv-lists {
  display: inline-block;
  list-style: none;
  width: 25%;
}
.mv-lists-wrap {
  display: flex;
  justify-content: center;
}
.mvs-item {
  padding: 0.8vw;
}
</style>