<template>
  <div
    class="playlists"
    ref="playlists"
  >
    <div
      class="top-list-item-f"
      v-if="topList.id"
    >
      <top-list-item
        :id="topList.id"
        :img="topList.coverImgUrl"
        :name="topList.name"
        :description="topList.description"
      />
    </div>
    <div class="tabs">
      <tabs
        :tabs="tabs"
        @tabChange="onTabChange"
        align="right"
        v-model="activeTabIndex"
      />
    </div>
    <div class="playlist-item-f">
      <playlist-item
        :id="list.id"
        :key="list.id"
        :img="list.coverImgUrl"
        :name="list.name"
        :playCount="list.playCount"
        :creatorName="list.creator.nickname"
        :creatorImg="list.creator.avatarUrl"
        v-for="list in playlists"
      />
    </div>
    <pagination
      :current-page.sync="currentPage"
      :page-size="PAGE_SIZE"
      :total="total"
      @current-change="onPageChange"
      class="pagination"
    ></pagination>
    <div class="test"></div>
  </div>
</template>
<script>
import TopListItem from "@/components/content/playlists/TopListItem";
import PlaylistItem from "@/components/content/playlists/PlaylistItem";
import Tabs from "@/components/common/tabs/Tabs";
import Pagination from "@/components/common/pagination/Pagination";
import { getPlaylists, getTopPlaylists } from "@/api/playlist.js";
import { getPageOffset } from "@/utils/common.js";
import { scrollInto } from "@/utils/dom.js";

const PAGE_SIZE = 50;
export default {
  components: {
    TopListItem,
    Tabs,
    PlaylistItem,
    Pagination,
  },
  name: "SongLsit",
  data() {
    return {
      activeTabIndex: 0,
      topList: {},
      playlists: [],
      currentPage: 0,
      total: 0,
    };
  },
  async created() {
    this.PAGE_SIZE = PAGE_SIZE;
    this.tabs = [
      "全部",
      "欧美",
      "华语",
      "流行",
      "说唱",
      "摇滚",
      "民谣",
      "电子",
      "轻音乐",
      "影视原声",
      "ACG",
      "怀旧",
      "治愈",
      "旅行",
    ];
    this.initData();
  },
  methods: {
    async initData() {
      this.getPlaylists();
      this.getTopList();
    },
    async getPlaylists() {
      const { playlists, total } = await getPlaylists({
        limit: PAGE_SIZE,
        // getPageOffset可以得到第i页的第一个item
        offset: getPageOffset(this.currentPage, PAGE_SIZE),
        cat: this.tabs[this.activeTabIndex],
      });
      this.playlists = playlists;
      // 此分类下有多少条歌单
      this.total = total;
    },
    async getTopList() {
      const { playlists } = await getTopPlaylists({
        limit: 1,
        cat: this.tabs[this.activeTabIndex],
      });
      this.topList = playlists[0] || {};
    },
    onTabChange() {
      this.initData();
    },
    // el-pagination:回调参数就是当前页
    async onPageChange(page) {
      this.currentPage = page;
      this.getPlaylists();
      scrollInto(this.$refs.playlists);
    },
  },
};
</script>

<style scoped>
.test {
  padding-top: 10vh;
}
.tabs {
  height: 4vh;
}
.playlist-item-f {
  display: flex;
  flex-wrap: wrap;
}
</style>