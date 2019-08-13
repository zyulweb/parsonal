<template>
  <div class="m-detail">
    <div class="s-title">
      <p>今日推荐</p>
      <p @click="toMore()">看不够？猛戳这></p>
    </div>
    <div class="m-list">
      <div class="movies"  v-for="(p,i) of list" :key="i">
        <img :data-id="p.alt.slice(-9,-1)" @click="str" :src="'https://images.weserv.nl/?url='+p.images.small" alt="">
        <p>{{p.title}}</p>
        <!-- <span >{{p.casts[0].name}}/span> -->
      </div>
    </div>
    <!-- <mt-button  size="large" type="primary" @click="loadMore()">加载更多</mt-button> -->
    <div class="s-title">
      <p>猜你喜欢</p>
      <p @click="toMore()">更多></p>
    </div>
    <div class="m-list">
      <div class="movies" v-for="(p,i) of list2" :key="i">
        <img :data-id="p.alt.slice(-9,-1)" @click="str"  :src="'https://images.weserv.nl/?url='+p.images.small" alt=""><!-- 跨域请求图片进行的字符串拼接 -->
        <p>{{p.title}}</p>
        <!-- <span >{{p.casts[0].name}}/span> -->
      </div>
    </div>
  </div>
</template>

<script>
// import qs from 'qs'
//引入指示符样式
import { Indicator } from 'mint-ui';
export default {
  data(){
    return{
      count:4,
      list:[],
      list2:[],
    }
  },
  methods:{
    // 点击事件进行跳转
    toMore(){
      this.$router.push('/More')
    },
    loadMore(){
      // 跳转页面加载状态
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      // 跨域请求
      this.axios.get(`/apis/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.list.length}&count=${this.count}`).then(res=>{
        //this.list=this.list.concat(res.data.subjects)
        // 在res传出的数据中的data中的subjects数组中截取两张图片保存在list数组中
        this.list=res.data.subjects.slice(0,2)
        this.list2=res.data.subjects.slice(2,4)
        // 加载结束的时机
        Indicator.close();
      })
    },
 
  str(e){
        // e.target事件的本身
        var id=parseInt(e.target.dataset.id);//获取照片的id
          // 跳转
          this.$router.push({
            name:'Detail',
            // params传参
            params:{
            id:id
            
        }
      })
                // console.log(id)
       }, 
    },
  created(){
    // 函数自调用
    this.loadMore()
  }
}
</script>

<style>
  .m-detail{
    padding:0 10px;
    margin-top:10px;
  }
  .m-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .movies{
    text-align: center;
    margin-bottom:10px;
  }
  .movies img{
    width:175px;
    height:240px;
  }
  .movies p{
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    width:175px;
    color:#666666;
  }
   .movies span{
    font-size: 14px;
    color:#999999;
  }
  .s-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .s-title p{
    margin: 0;
  }
  .s-title p:first-child{
    font-size: 16px;
    color:#FF5E1C;
  }
  .s-title p:last-child{
    font-size: 14px;
    color:#999999;
  }
</style>
