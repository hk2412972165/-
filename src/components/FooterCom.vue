<template>
  <!-- replace不保存历史记录 -->
  <van-tabbar placeholder v-model="active" route>
    <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/cate" icon="qr">分类</van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="shopping-cart-o" badge="0"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "FooterCom",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
</style>