<template>
<div>
  <mt-header title="更多电影">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  <div class="u-center">
    <div class="m-list">
      <div class="movies" v-for="(p,i) of list" :key="i">
        <img @click="toDetail"  v-if="p.alt.slice(-9,-1)" :data-id="p.alt.slice(-9,-1)"  :src="p.images.small" alt="">
        <p>{{p.title}}</p>
      </div>
    </div>
    <mt-button  size="large" type="danger" @click="loadMore()">加载更多</mt-button>
  </div>
</div>
</template>

<script>
//引入指示符样式
import { Indicator } from 'mint-ui';
export default {
  data(){
    return{
      count:6,
      list:[]
    }
  },
  methods:{
    // 跳转页面
    toDetail(e){
      // e.target代表函数绑定的本身，dataset.id获取id
      var id=parseInt(e.target.dataset.id);
      // 跳转指令
      this.$router.push({
        // 跳转的页面
        name:'Detail',
        // 把请求过来的id赋值给本地对象
        params:{
          id:id
        }
      })
    },
    loadMore(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
       this.axios.get(`/apis/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.list.length}&count=${this.count}`).then(res=>{
        // 将已经存在的数据，跟重新获取的数据进行拼接，而后赋值
        this.list=this.list.concat(res.data.subjects)
        Indicator.close();
      }) 
    }
  },
  created(){
    this.loadMore()
  }
}
</script>

<style>
  .u-center{
    padding:0 10px;
  }
  .mint-header {
     background-color: #ed713e !important;
  }
  .mint-button--danger {
    background-color:#ed713e !important
}
.m-list{
  margin-top:5px;
}
.movies img{
  height:210px;
  width:170px;
}
</style>

