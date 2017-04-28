import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

//开启调试模式
Vue.config.debug=true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

//定义组件
const FirstPage={template:'<div><h2>我是第 1 个页面</h2></div>'}
import secondcomponent from './component/secondcomponent.vue'

//创建一个路由实例并配置路由规则
const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:FirstPage
    },
    {
      path:'/second',
      component:secondcomponent
    }
  ]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
