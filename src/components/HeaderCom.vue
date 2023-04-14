<template>
  <!-- 如果路由中requireAuth如果为true，则显示返回按钮两个字，否则不显示 -->
  <!-- left-arrow如果显示为true就显示左箭头，否则就不显示左箭头 -->
  <van-nav-bar
    fixed
    placeholder
    :title="$route.meta.title"
    :left-text="$route.meta.requireAuth ? '返回' : ''"
    :left-arrow="$route.meta.requireAuth"
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  name: "HeaderCom",
  methods: {
    onClickLeft() {
      // 点击返回按钮返回上一级路由
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>