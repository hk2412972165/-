<template>
  <div id="app">
    <!-- 公共头部 -->
    <HeaderCom />
    <!-- 只留下页面视图占位 -->
    <router-view />
    <!-- 公共底部 -->
    <FooterCom v-show="footerBoolean" />
  </div>
</template>

  <script>
import HeaderCom from "./components/HeaderCom.vue";
import FooterCom from "./components/FooterCom.vue";
export default {
  name: "App",
  components: {
    HeaderCom,
    FooterCom,
  },
  data() {
    return {
      // 默认为true显示底部
      footerBoolean: true,
    };
  },
  // 是否要显示公共底部添加监听事件
  watch: {
    "$route.path": function (newVal) {
      console.log(newVal);
      if (
        newVal == "/" ||
        newVal == "/cate" ||
        newVal == "/cart" ||
        newVal == "/my"
      ) {
        // 显示公共底部
        this.footerBoolean = true;
      } else {
        // 隐藏公共底部
        this.footerBoolean = false;
      }
    },
  },
};
</script>

<style lang="scss">
</style>
