<template>
  <div>
     <mt-header class="xiang" title="电影详情">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="he"> 
      <div class="beijing">        
        <!-- 背景图片 -->
        <img :src="images.large" alt="">
        </div>
        <!-- 遮罩层 -->
      <div class="zhezhao"></div>
      <!-- 详情介绍 -->
      <div class="qi">
        <img :src="images.small" alt="">
        <div class="qing">
          <h2 class="guo_1">{{list.title}}<p></p></h2>
          <h4>{{list.original_title}}</h4>
          <p>评分：<span class="huang">{{rating.average}}</span></p>
          <p class="guo">国家：<span>{{tags[0]}}</span></p>
          <p>导演：<span v-for="(p,i) of list.casts" :key="i">{{p.name}}    </span></p>
        </div>
      </div>
      <!-- 视频播放 -->
      <video id="v3" :src="blooper_urls[i]" :poster="images[i]" style="width:100%;display:none" muted preload="auto" controls></video>

      <!-- 开始图标 -->
      <img @click="bofang" id="bofang" class="tubiao" src="../../img/music.png" alt="">


      <!-- 电影播放:花絮 -->
     
      <p>更多花絮</p >
      <div class="mov-details">
        <video @click="player" :data-code="i" class="vio" v-for="(s,i) of blooper_urls" :key="i" :src="s" :poster="images[i]" >
        </video>
      </div>

      <!-- 电影背景详情 -->
      <div class="xiangqing">{{list.title}}详情介绍 · · · </div>
      <div class="jieshao">&nbsp;&nbsp;&nbsp;  
          {{list.summary}}
      </div>

      <!-- 分割线 -->
      <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 10px;"/>

      <!-- 短评 -->
      <div>
        <div>
          <span class="xiangqing">{{list.title}}的短评 · · · </span>
          <span class="quan">( 全部 {{list.comments_count}} 条 )</span>
        </div>
        <div style="font-size:13px;margin:5px 0;">
            <span class="hot">热门 /</span><span class="quan"> 最新 /</span><span class="quan"> 好友</span>
        </div>
        <!-- 分割线 -->
        <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 10px;"/>
        <!-- 遍历data数组，获取data中的数据 -->
        <div  class="duanping" v-for="(item,i) of data" :key="i">
        
          <div class="duanping_1">
  
      
            <span class="quan">  {{item.author.name}}  </span>
            <span style="font-size:14px;color:#605E5F;">  看过  </span>
        
            
            <span class="kan">{{formatDate}}</span>
          </div>
          <div class="jieshao">{{item.summary}}</div>
          
          <!-- 分割线 -->
        <hr style="height:1px;border: none;border-top:1px solid #ddd;margin:10px 10px;margin:0px;"/>
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
      // 声明数组和对象，如果不声明会出现属性未定义的报错
      i:0,
      id:'',
      list:"",
      images:[],
      rating:[],
      tags:[],
      blooper_urls:[],
      data:[]

    }
  },
  created(){
    // 进行当前页面的缓存
    Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
    // 获取从上个界面传过来的id参数，并把id赋值给id对象
    this.id=this.$route.params.id;
    // 把获取到的id引入到api，进行数据的获取
    var url =`/apis/v2/movie/subject/${this.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`
    // 对api进行跨域请求
    this.axios.get(url).then(res=>{
              //对在data声明的数组和对象进行赋值 
              this.list=res.data;
              this.images=res.data.images;
              this.rating=res.data.rating;
              this.tags=res.data.tags;
              this.blooper_urls=res.data.blooper_urls;
              this.data=res.data.popular_reviews;
                console.log(res)
                // 页面加载完毕后结束加载，显示页面
                Indicator.close();
            });
    // console.log(this.$route.params.id)
    // http://api.douban.com/v2/movie/subject/1088314?apikey=0df993c66c0c636e29ecbb5344252a4a
    
  },
   methods: {
    //  对播放图标设置点击事件
     bofang(){
       var img=document.getElementById("bofang");
       img.style.display="none";
       var v3=document.getElementById("v3");
       v3.style.display="block";
       v3.play();
     },
     player(e){
        var code=parseInt(e.target.dataset.code);
        this.i=code;
        this.bofang();
      },
   },
    computed:{
        // 显示实时现在的时间
        formatDate(){
            var dates = new Date();
            var year = dates.getFullYear();
            var month = dates.getMonth()+1;
            var date = dates.getDate();
            return year+"年"+month+'月'+date+"日"
        }
    },

}
</script>

<style>
mov-details{
  display:flex;
  justify-content: space-between;
}
.vio{
width:23%;
}


.kan{
  font-size: 14px;
  color:#605E5F;
  margin-right:10px;
}
.duanping_1{
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  
}
.duanping{
  padding: 10px;
  margin-top:-15px;
}
.quan{
  color:#77C1E8;
}
.hot{
  margin-left:10px;
}
.xiangqing{
  margin-top:15px;
  color:brown;
  margin-left: 10px;
  font-size:15px;
}
.ping{
  color:green;
}
.ping input{
  width:137px;
  height:25px;
  border:1px solid green;
  color:green;
}
.tubiao{
  position: absolute;
      top: 33%;
    left: 30%;
    width: 49px;
    opacity: 0.7;
}
.guo_1{
  height:50px;
}
.guo{
  margin-bottom:0 !important;
}
.huang{
  color:yellow;
  font-size:20px
}
  .jieshao{
    padding: 10px;
    font-size:13px;
  }
  .qing h4{
    color:white;
    font-size:14px;
  }
  .qing p{
    margin-bottom: 20px;
    color:white;
    font-size:14px;
  }
  .qing h2{
    margin:17px 0px -10px 0px;
    color:red;
  }

  .qing{
    padding: 5px;
    flex-grow:1
  }
  .beijing{
  /* width:100px; */
  height:240px;
  background:black;
  filter:blur(20px);/*模糊滤镜*/
  opacity: .9;/*透明度*/
  }
  .beijing img{
    width:100%;
    height:240px;
  }
  .zhezhao{
    position:absolute;
    width:100%;
    height:240px;
    background:#333;
    top:40px;
    left:0;
    z-index:-1;
    
  }
  .qi{
    height:240px;
    position: absolute;
    top:40px;
    left:0;
    display: flex;
  }
  .qi img{
    width:150px;
    height:220px;
    padding: 10px;
  }
  .xiang{
    z-index: 1;
  }
</style>
