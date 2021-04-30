<template>
  <div
    class="pagination"
    v-if="total>pageSize"
  >
    <el-pagination
      :pageSize="pageSize"
      :total="total"
      layout="prev,pager,next"
      v-bind="$attrs"
      v-on="$listeners"
    ></el-pagination>
  </div>

</template>

<script>
export default {
  props: ["total", "pageSize"],
  name: "Pagination",
};
</script>

<style scoped>
.pagination {
  background-color: var(--main-bkg-color);
  text-align: right;
}
.el-pagination,
.el-pagination >>> .btn-prev,
.el-pagination >>> .btn-next,
.el-pagination >>> li {
  background-color: var(--main-bkg-color) !important;
}
.el-pagination >>> .btn-prev,
.el-pagination >>> .btn-next {
  color: var(--main-playlist-button-color);
}
.el-pagination >>> button:disabled {
  color: var(--main-playlist-button-disabled-color);
}
.el-pagination >>> li {
  font-size: 0.8rem;
  color: var(--main-playlist-li-color);
}
.el-pagination >>> li:hover {
  color: var(--main-playlist-li-hover-color);
}
.el-pagination >>> .active {
  color: var(--main-playlist-li-active-color);
}
</style>