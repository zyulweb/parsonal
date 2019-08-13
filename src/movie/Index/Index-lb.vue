<template>
  <div class="lb">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(p,i) of list" :key="i">
        <img :src="'https://images.weserv.nl/?url='+p.images.small" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // 创建保存轮播的数组
      list:[]
    }
  },
  created(){
    // 跨域请求，请求轮播图片
    this.axios.get(`/apis/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=5&count=4`).then(res=>{
        // 把请求的数据赋值给list
        this.list=res.data.subjects
    })
  }
}
</script>

<style>
  .lb{
    margin-top:5px;
    padding: 0 10px;
  }
  .mint-swipe  {
    background: #fff;
    height:200px !important;
  }
  .lb img{
    width:100%;
    height:auto;
  }
</style>
