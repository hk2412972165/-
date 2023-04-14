<template>
  <div class="cart">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-swipe-cell v-for="(item, index) in list" :key="item.goodsId">
        <van-checkbox
          :name="item.goodsId"
          @click="clickCheckbox"
        ></van-checkbox>
        <van-card
          :num="item.num"
          :price="item.sellingPrice"
          :desc="item.goodsIntro"
          :title="item.goodsName"
          class="goods-card"
          :thumb="item.goodsCoverImg"
        >
          <template #footer>
            <van-stepper
              v-model="item.num"
              theme="round"
              button-size="22"
              disable-input
            />
          </template>
        </van-card>
        <template #right>
          <van-button
            @click="del(index)"
            square
            text="删除"
            type="danger"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
    </van-checkbox-group>

    <van-submit-bar
      :price="totalPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked" @click="clickAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
  
  <script>
export default {
  name: "CartView",
  data() {
    return {
      result: [],
      checked: false,
      //   定一个数组，用来接收vuex中的数据
      list: [],
    };
  },
  computed: {
    totalPrice() {
      var sum = 0;
      var selectList = this.list.filter((item) => {
        return this.result.includes(item.goodsId);
      });
      selectList.forEach((item) => {
        sum += item.num * item.sellingPrice;
      });
      return sum;
    },
  },
  methods: {
    onSubmit() {
    },
    clickAll() {
      if (this.checked) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    // 全选反选判断
    clickCheckbox() {
      console.log(this.result);
      if (this.result.length == this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    del(index) {
      this.list.splice(index, 1);
    },
  },
  created() {
    // 取出保存在vuex中的数据
    console.log(this.$store.state.cartList);
    this.list = this.$store.state.cartList;
  },
  watch: {
    // 监听购物车数组长度为0取消全选复选框
    list(newVal) {
      if (newVal.length == 0) {
        this.checked = false;
      }
    },
  },
};
</script>
  
  <style lang="scss" scoped>
::v-deep .van-swipe-cell__wrapper {
  display: flex;
  padding-left: 10px;
  .van-card {
    flex: 1;
    .van-card__desc {
      width: 200px;
    }
  }
}
.goods-card {
  margin: 0;
  background-color: white;
}

.delete-button {
  height: 100%;
}
.van-submit-bar {
  bottom: 50px;
}
</style>