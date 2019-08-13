import Vue from 'vue'
import Router from 'vue-router'

// 引入主页面
import Index from './movie/Index.vue'


// 头部

// 电影页面
import Dianying from './movie/Dianying.vue'
// 登录注册页面
import Login from './movie/Login.vue'
// 登录注册页面
import Reg from './movie/Reg.vue'
// 头部
import Header from './movie/Header.vue'
// 详情页
import Detail from './movie/Index/Detail.vue'
// 主页轮播
import Indexlb from './movie/Index/Index-lb.vue'
// 主页内容
import Indexdetail from './movie/Index/Index-detail.vue'
// 跳转页
import More from './movie/Index/More.vue'
// 点击登录
import Center from './movie/center/Center.vue'
// 观看历史
import Lishi from './movie/center/Lishi.vue'
// 资讯
import Inform from './movie/Inform.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Inform',component:Inform},
    {path:'/Lishi',component:Lishi},
    {path:'/Center',component:Center},
    {path:'/Detail',name:'Detail',component:Detail},
    {path:'/Indexlb',component:Indexlb},
    {path:'/Indexdetail',component:Indexdetail},
    {path:'/More',component:More},

    {path:'/Header',component:Header},
    {path:'/Reg',component:Reg},
    {path:'/Login',component:Login},
    {path:'/Dianying',component:Dianying},
    {path:'/Index',component:Index}
  ]
})
