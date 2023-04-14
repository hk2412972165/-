<template>
  <div class="detail">
    <img :src="detailObj.goodsCoverImg" />
    <h3>{{ detailObj.goodsName }}</h3>
    <p>{{ detailObj.goodsIntro }}</p>
    <span>{{ detailObj.tag }}</span>
    <b>￥{{ detailObj.sellingPrice }}</b>

    <van-goods-action>
      <van-goods-action-button
        color="#6bd8d8"
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button color="#0dc3c3" type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  data() {
    return {
      detailObj: null,
    };
  },
  methods: {
    addCart() {
      // 取出vuex中原有的购物车数据
      var oldList = this.$store.state.cartList;

      // 判断购物车数组中是否存在要添加的商品
      // 如果存在，数量进行重新计算就可以
      for (var i = 0; i < oldList.length; i++) {
        if (this.detailObj.goodsId == oldList[i].goodsId) {
          oldList[i].num += 1;
          // 提交vuex的mutations修改方法
          this.$store.commit("mutationsCartList", oldList);
          // 跳转到购物车页面
          this.$router.push({ path: "/cart" });
          return;
        }
      }

      // 不存在，则直接新增一条
      this.detailObj.num = 1;
      var obj = JSON.stringify(this.detailObj);
      var newObj = JSON.parse(obj);
      // 把当前商品详情加入到购物车中
      oldList.push(newObj);
      // 提交vuex的mutations修改方法
      this.$store.commit("mutationsCartList", oldList);
      // 跳转到购物车页面
      this.$router.push({ path: "/cart" });
    },
  },
  created() {
    console.log(this.$route.query);
    // 接收传过来的参数
    this.detailObj = this.$route.query;
  },
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 10px;
  img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }
  h3 {
    font-size: 18px;
    color: #333333;
    margin: 8px 0;
  }
  p {
    font-size: 14px;
    color: #333333;
  }
  span {
    display: block;
    font-size: 14px;
    color: #999999;
    margin: 8px 0;
  }
  b {
    font-size: 22px;
    color: #f63515;
  }
}
</style>