<template>
  <div class="new-songs">
    <div
      class="title"
      v-if="lists.length"
    >
      <span>
        最新音乐
      </span>
    </div>
    <div class="new-list-wrap">
      <div
        :key="subListIndex"
        class="sub-list"
        v-for="(subList,subListIndex) in finalList"
      >
        <song-item
          :key="song.id"
          :indexNum="getSongNumber(subListIndex,index)"
          v-bind="regularizeSong(song)"
          v-for="(song,index) in subList"
          @click.native="onClickSong(subListIndex,index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "@/store/helper/music";
import { getNewSongs } from "@/api/exploreMusic";
import { createSong } from "@/utils/business";
import SongItem from "@/components/content/songs/SongItem";

const subListLenthlimit = 10;
export default {
  name: "NewSongs",
  async created() {
    const res = await getNewSongs();
    this.lists = res.result;
  },
  data() {
    return {
      subListLenth: subListLenthlimit / 2,
      lists: [],
    };
  },
  methods: {
    getSongNumber(subListIndex, index) {
      // 序号为1开始

      return subListIndex * this.subListLenth + index + 1;
    },
    regularizeSong(song) {
      const {
        id,
        name,
        song: {
          artists,
          mvid,
          album: { blurPicUrl },
          duration,
        },
      } = song;
      return createSong({
        id,
        name,
        artists,
        img: blurPicUrl,
        duration,
        mvId: mvid,
      });
    },
    getSongOrder(subListIndex, index) {
      return subListIndex * this.subListLenth + index;
    },
    onClickSong(subListIndex, index) {
      const normalizedSongIndex = this.getSongOrder(subListIndex, index);
      const normalizedSong = this.finalSongs[normalizedSongIndex];
      this.startSong(normalizedSong);
      this.setPlaylist(this.finalSongs);
    },
    // 将this.startSong映射为this.$store.dispatch(startSong,payload)
    // 将this.setPlaylist映射为this.$store.commit(setPlaylist,payload)
    ...mapMutations(["setPlaylist"]),
    ...mapActions(["startSong"]),
  },
  computed: {
    finalList() {
      return [
        this.lists.slice(0, this.subListLenth),
        this.lists.slice(this.subListLenth, this.lists.length),
      ];
    },
    finalSongs() {
      return this.lists.map((song) => this.regularizeSong(song));
    },
  },
  components: { SongItem },
};
</script>

<style scoped>
.title {
  position: absolute;
  font-size: 1rem;
}
.new-songs {
  position: relative;
  margin-top: 2vw;
}
.new-list-wrap {
  display: flex;
  padding: 2vw;
  padding-top: 2.5vw;
}
.sub-list {
  flex: 1;
}
</style>