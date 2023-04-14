<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.imgurl" />
      </van-swipe-item>
    </van-swipe>

    <!-- 导航列表 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="value in navList"
        :key="value.categoryId"
        :url="value.href"
      >
        <van-image :src="value.imgUrl" />
        <span>{{ value.name }}</span>
      </van-grid-item>
    </van-grid>
    <!-- 新品上线 -->
    <!-- 父组件传递给子组件数据 -->
    <GoodsCom :list="newList" title="新品上线" />
    <!-- 热门商品 -->
    <GoodsCom :list="hotList" title="热门商品" />
    <!-- 最新推荐 -->
    <GoodsCom :list="recomendList" title="最新推荐" />
  </div>
</template>

<script>
import GoodsCom from "../components/GoodsCom.vue";
export default {
  name: "HomeView",
  components: {
    GoodsCom,
  },
  data() {
    return {
      images: [],
      navList: [],
      newList: [],
      hotList: [],
      recomendList: [],
    };
  },
  created() {
    this.axios.get("/data").then((res) => {
      console.log(res.data);
      // 接收轮播图的数据
      this.images = res.data.swiperList;
      // 接收导航列表数据
      this.navList = res.data.navList;
      // 接收新品上线的数据
      this.newList = res.data.newGoodses;
      // 接收热门商品数据
      this.hotList = res.data.hotGoodses;
      //接收推荐商品数据
      this.recomendList = res.data.recommendGoodses;
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  .van-swipe {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-grid {
    .van-grid-item {
      .van-image {
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
      }
      span {
        font-size: 14px;
        color: #000;
      }
    }
  }
}
</style>
