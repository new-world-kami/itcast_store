// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/style.css';
import MyAxios from '@/plugins/MyAxios';

// 注册MyAxios插件
Vue.use(MyAxios);
// 注册ElementUI插件
Vue.use(ElementUI);
Vue.config.productionTip = false;

// 下面这个注释不能删除，作用是eslint执行时候忽略下面文件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
