import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//导入公共样式
import "./assets/css/style.css";

// 导入rem适配器的基准值设置
import "amfe-flexible/index.js";

// 导入mock的配置文件
import "../data/mock.js";
// 导入axios并挂载
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// import Vue from 'vue';
// 导入Vant组件和样式，挂载到vue实例上，为后期导入的按钮等组件提供基础
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

//轮播图懒加载
import { Lazyload } from "vant";

Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
