<template>
<div>
    <!-- 头部 -->
    <heaDer></heaDer>
    <div>
        <!-- 列表头 -->
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">精选</mt-tab-item>
            <mt-tab-item id="2">电影</mt-tab-item>
            <mt-tab-item id="3">资讯</mt-tab-item>
            <mt-tab-item id="4">个人中心</mt-tab-item>    
        </mt-navbar>
        <!-- 列表头对应的内容 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item  id="1">
                <index-lb></index-lb>
                <index-detail></index-detail>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <dianying></dianying>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <inform></inform>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <center></center>
                <lishi></lishi>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</div>
</template>
<script>
//引入头部组件
import Headers from './Header'
//引入轮播组件
import IndexLb from './Index/Index-lb.vue'
//引入电影详情组件
import IndexDetail from './Index/Index-detail'
//引入电影组件
import Dianying from './Dianying'
// 引入我的中心头部
import Center from './center/Center'
// 引入我的中心主体
import Lishi from './center/Lishi'
// 引入主页资讯
import Inform from './Inform'

export default {
    data(){
        return{
            selected:"1",
        }
    },
    components: {
       'heaDer':Headers,
       'index-lb':IndexLb,
       'index-detail':IndexDetail,
       'dianying':Dianying,
       'center':Center,
       'lishi':Lishi,
       'inform':Inform
    }
}
</script>
<style>
    .mint-navbar .mint-tab-item{
        padding:10px 0 !important;
    }
    .mint-tab-item-label {
        font-size: 16px !important;
    }
    .mint-navbar {
        background:#ed713e !important;
        color: aliceblue !important;
    }   
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom:0 !important;
        color: #ff0 !important;
    }   

</style>
