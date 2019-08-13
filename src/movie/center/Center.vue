<template>
<div class="beijing_1">
    <div class="dian" v-if="!isLogin">
        <img src="../../img/yonghu.png" alt="">
        <div class="dian_1">
            <h3>
                <router-link class="dianji" to="/login">点击登录</router-link>
            </h3>
            <span>登录后可享受更多服务</span>
        </div>
        <img src="../../img/saoma.png" alt="">
    </div>
    <div class="dian" v-if="isLogin">
        <img src="../../img/sb.png" alt="">
        <div class="dian_1">
            <h3>
                <div class="dianji">欢迎回来！</div>
            </h3>
        </div>
        <img src="../../img/saoma.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            isLogin:false,
            uname:""
        }
    },
    methods:{
        // 退出登录点击事件
        goOut(){
            // 去除获取的用户信息
            sessionStorage.removeItem("u")
            // 清空所有缓存，清除已有的登录用户信息
            sessionStorage.clear()
        }
    },
    created(){
        // 在公共样式里获取登录界面登录的用户名
        var uname=sessionStorage.getItem("u");
        // console.log(uname);
        // console.log(uname==null);
        // 判断如果uname没有值则不变
        if(uname==null){
            this.isLogin=false
        }else{//反之则把uname的值赋予uname变量中
            this.isLogin=true
            this.uname=uname
        }
    }
}
</script>

<style>
.dianji{
    color:black;
    text-decoration: none;
        margin-top: 28px;
}
.dian_1{
    margin-left:30px
}
.dian_1 h3{
    margin-top:15px;
    margin-bottom: 10px
}
.dian_1 span{
    color:rgba(0, 0, 0, 0.3);
}
.dian{
    display: flex;
    padding: 10px;
    width:345px;
    height:80px;
    background:white;
    margin:0  auto;
}
.beijing_1{
    background: rgba(0, 0, 0, 0.1);
    height:105px;
}
.dian img:first-child{
    width:60px;
    height:60px;
    margin-top:10px;
    margin-left:10px;
}
.dian img:last-child{
    width:35px;
    height:35px;
    margin: 28px 0px 0px 60px
}
.dian span{
    font-size:14px;
}
</style>
