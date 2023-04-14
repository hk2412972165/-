<template>
  <div class="cate">
    <!-- 左侧侧边导航 -->
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="item in list"
        :key="item.goodsId"
        :title="item.goodsName"
      />
    </van-sidebar>
    <!-- 右侧商品 -->
    <div class="product-right" v-if="produtObj">
      <div
        class="product-cell"
        v-for="item in produtObj.secondLevelCategoryVOS"
        :key="item.goodsId"
      >
        <h3>{{ item.goodsName }}</h3>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="value in item.thirdLevelCategoryVOS"
            :key="value.goodsId"
            :to="{path: '/detail', query: value}"
          >
            <van-image :src="value.goodsCoverImg" />
            <span>{{ value.goodsName }}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CateView",
  data() {
    return {
      activeKey: 0,
      // 建个空数组接收数据
      list: [],
      produtObj: null,
    };
  },
  methods: {
    onChange(index) {
      console.log(index);
      this.produtObj = this.list[index];
      console.log(this.produtObj);
    },
  },
  // 获取分类页面的数据
  created() {
    this.axios.get("/category").then((res) => {
      console.log(res.data);
      // 接收分类数据
      this.list = res.data.data;
      // 接收家电数码手机的默认数据
      this.produtObj = res.data.data[0]
    });
  },
};
</script>

<style lang="scss" scoped>
.van-sidebar {
  width: 120px;
  position: fixed;
  left: 0;
  top: 46px;
}
.product-right{
  width: 255px;
  position: absolute;
  right: 0;
  top: 46px;
  padding-bottom: 50px;
  h3{
    font-size: 16px;
    color: #000000;
    padding: 10px;
  }
  .van-image{
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
  }
  span{
    font-size: 12px;
    color: #000000;
  }
}
</style>