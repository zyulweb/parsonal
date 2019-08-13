<template>
  <div class="inform">
    <div v-for="(p,i) of list" :key="i"  class="grand">
      <div class="parent">
        <video @click="player(i)"  :src="p.video" style="width:100%" height="200"   paused preload="auto" id="v3" ></video>
        <div class="play" @click="player(i)" >
          <img v-show="s!==i"  src="../img/play.png" alt="">
        </div>
        <div class="c2" >
          <p v-show="s!==i" >{{p.text}}</p>
        </div>
        <div class="detail">
          <p>{{p.name}}</p>
          <p>时间:{{p.passtime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入指示符样式
import { Indicator } from 'mint-ui';

export default {
  data(){
    return{    
      title:'',
      list:[],
      s:-1
      }

  },
  methods:{
    player(i){
      let video=document.getElementsByTagName('video')
      // console.log(video)
      let img=document.getElementsByTagName('img')
      if(video[i].paused==true){
        video[i].play()
         this.s=i
      }else{
        video[i].pause()
         this.s=-1
      }
    },
    loadMore(){
      Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
      var url='/wyy/getJoke?page=1&count=20&type=video'
      this.axios.get(url).then((res)=>{
        this.list=res.data.result
        // console.log(this.list)
        Indicator.close();
      })
    }
  },
  created(){
    this.loadMore();
    let that=this
      window.onscroll = function() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
      document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) { 
      //已滚动底部
      that.loadMore();
      }
    }
  }
}
</script>

<style>
  .inform{
    margin-top:5px;
    padding:0 10px;
  }
  .grand{
    margin-bottom: 10px;
  }
  .parent{
    position: relative;
  }
  .c2{
    position: absolute;
    top:0px;
    left:0;
    
  }
  .c2 p{
    font-size:18px;
    overflow:hidden;
    color:#ff0;
  }
  .detail{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .detail p:first-child{
    color:brown;
    font-size: 18px;
  }
  .detail p:last-child{
    color:#333;
    font-size: 12px;
  }
  .play{
    position: absolute;
    top:33%;
    left:42%;
  }
  .play img{
    width:50px;
    height:50px;
    transition: all .5 linear;
  }
  .hidden{
    opacity: 0;
  }
  .chu{
    opacity: 1;
  }
</style>
