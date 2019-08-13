<template>
    <div class="nav">
        <div class="nav-left" >
            <img src="../img/kchoose.png" alt="">
            <p style="color:#FF5E1C;font-weight:bold;    font-size: 15px;">龅牙</p> 
        </div>
        <div class="nav-middle">
            <input type="text" placeholder="搜索影片...">
        </div>
        <!-- 登录注册 -->
        <div class="nav-right" v-if="!isLogin"><!-- v-if进行判断如果是fales不会改变 -->
            <router-link class="nav-right1" to='/Login'>
                <span>登陆/</span><span>注册</span>
            </router-link>
        </div>
        <div class="nav-right2" v-if="isLogin"><!-- v-if进行判断如果是true则显示用户的名字 -->
            <router-link class="nav-right3" to='/Login'>
                <div class="four">
                    <span class="one">{{uname}}</span>
                    <span class="tow"> 欢迎回来!</span>
                </div>
                <span class="three" @click="goOut">退出登录</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 声明isLogin的状态
            isLogin:false,
            // 保存用户登录传过来的参数
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
            // // 判断如果uname没有值则不变
            // if(uname==null){
            // this.isLogin=false
            // }else{//反之则把uname的值赋予uname变量中
            //     this.isLogin=true
            //     this.uname=uname
            // }
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
    
    .nav-right2{
        font-size: 12px;
    }
    .nav-right3{
        text-decoration: none;
    }
    .one{
        color:forestgreen;
        margin:right;
    }
    .tow{
        color:black;
          margin:right;
    }
    .three{
        margin-left:60px;
    }

    .nav-right1{
        color:black;
        text-decoration: none;
    }
    .nav{
        display: flex;
        justify-content: space-around;
        align-items: center;    
    }
    .nav-left{
        text-align: center;
        display: flex;
        align-items: center
    }
    .nav-left p{
        font-size: 14px;
        margin-left:5px;
    }
    .nav-left img{
        width: 30px;
        height: 30px;
    }
    .nav-middle{
        text-align: center;
    }
    .nav-middle input{
        padding-left:  25px;
         width: 70%;
         height:20px;
         border-radius: 5px; 
         outline: 0; 
    }
    .nav-right span{
        font-size: 14px;
    }

</style>
