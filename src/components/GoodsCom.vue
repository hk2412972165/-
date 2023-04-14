<template>
  <div class="goods">
    <h3>{{ title }}</h3>
    <van-grid :column-num="2">
      <van-grid-item
        v-for="value in list"
        :key="value.goodsId"
        :to="{ path: '/detail', query: value }"
      >
        <van-image :src="value.goodsCoverImg" />
        <span>{{ value.goodsName }}</span>
        <b>￥{{ value.sellingPrice }}</b>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "GoodsCom",
  // 接收父组键传过来的数据
  props: ["list", "title"],
};
</script>

<style lang="scss" scoped>
.goods {
  h3 {
    font-size: 16px;
    color: #18aeae;
    background-color: #f9f9f9;
    text-align: center;
    font-weight: normal;
    padding: 10px 0;
  }
  .van-grid {
    .van-image {
      width: 120px;
      height: 120px;
    }
    span {
      font-size: 14px;
      color: #222333;
      margin: 5px 0;
    }
    b {
      font-size: 14px;
      color: #1baeae;
    }
  }
}
</style>