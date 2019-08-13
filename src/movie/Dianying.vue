<template>
    <div>
        <div class="zhuti">
            <!-- 轮播组件 -->
            <mt-swipe id="lunbo" :auto="4000">
                <mt-swipe-item v-for="(p,i) of list" :key="i">
                    <img class="daxiao" :src="'https://images.weserv.nl/?url='+p.images.small" alt="">
                </mt-swipe-item>
                
            </mt-swipe>
            <!-- 最新上映 -->
            <div class="zuixin">
                <h3>最新上映</h3>
                <router-link class="xianxian" to="/More">
                    <h6>实时更新，应有尽有></h6>
                </router-link>
            </div>
            <div id="zuixin">
                <div class="zuixin_1">
                    <div class="zuixin_2" v-for="(p,i) of list1" :key="i"  > 
                        <img :data-id="p.alt.slice(-9,-1)" @click="str"  :src="'https://images.weserv.nl/?url='+p.images.small">
                        <div class="zuixin_4">
                            <h5>{{p.title}}</h5>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!-- 热播大片 -->
            <div class="zuixin">
                <h3>热播大片</h3>
                <router-link class="xianxian" to="/More">
                    <h6>更多></h6>
                </router-link>
            </div>
            <div id="zuixin">
                <div class="zuixin_1">
                    <div class="zuixin_2" v-for="(p,i) of list2" :key="i"  > 
                        <img :data-id="p.alt.slice(-9,-1)" @click="str"  :src="'https://images.weserv.nl/?url='+p.images.small">
                        <div class="zuixin_4">
                            <h5>{{p.title}}</h5>
                        </div>
                    </div>
                   
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
            list:[],
            list1:[],
            list2:[]
        }
    },
    methods: {
        add(){
            Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
            // 跨域请求api
            var url="/apis/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=22&count=12"
            this.axios.get(url).then(res=>{
                // 对要请求的数据截取，对要显示的数据数量进行设置
                this.list=res.data.subjects.slice(0,4);
                this.list1=res.data.subjects.slice(4,8);
                this.list2=res.data.subjects.slice(8,12);
                // console.log(res)
                Indicator.close();
            })
        },
        handleChange(index) {
        },
        str(e){
            // e.target指数据的本身 dataset.id获取的数据id
            var id=parseInt(e.target.dataset.id);
                this.$router.push({
                name:'Detail',
                params:{//传参
                id:id
            }
      })
                // console.log(id)
        },
        
    },
        created(){
            this.add()
        }
   
    }
</script>
<style>
.xianxian{
    text-decoration: none;
}
.zuixin_2{
    margin-bottom: 5px;
}
.daxiao{
    width:100%;
}
.zhuti{
    padding: 10px;
}
#lunbo{
    height:200px;
    margin-top: -5px;
}
.zuixin{
    display: flex;
    justify-content: space-between !important;
    margin-top: -10px;
}
.zuixin h3{
    color:#FF5E1C;
    margin-left:10px;
}
.zuixin_2 img{
    height:240px;
}
.zuixin h6{
    color:#C4C4C4;
    margin-right:10px;
}
.zuixin_1{
    display: flex;
    justify-content:space-between;
    flex-wrap: wrap;
}
.zuixin_2 img{
    width:175px;
}
.zuixin_3 img{
    width:175px;
}
.zuixin_4{
    text-align: center;
}
.zuixin_4 h5{
    margin:0;
    color:#646464;
        width: 175px;
}
.zuixin_4 h6{
    margin:0;
    color:#C4C4C4;
}
.zuixin_1{
    margin-top:10px;
}
#zuixin{
        margin-top: -25px;
}

</style>
