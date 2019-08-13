<template>
    <div>
        <mt-header class="a" title="登录">
            <router-link to="/Index" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="denglu">
           <mt-field class="denglu1" label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
           <mt-field class="denglu2" label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
        </div>
        <div class="zhuce">
            <button class="zhuce1"><router-link class="zhuce3" to='/Reg'>注册</router-link></button>
            <button @click="login" class="zhuce2">登录</button>
        </div>
        <div class="wang">
            <h5 class="wang1" @click="why">忘记密码？</h5>
        </div>
        <div class="qita">
            <i></i>
            <span>其他登录方式</span>
            <i></i>
        </div>
        <div class="wei">
            <img src="../img/nir1.png" alt="">
            <img class="wei1" src="../img/nir2.png" alt="">
            <img class="wei1" src="../img/nir3.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        why(){
            this.$toast({
                message:"亲！这里建议您在重新注册呦！！！",
                duration:3000
            })
        },
        login(){
            // 1.获取用户名和密码
            var u=this.uname;
            var p=this.upwd;
            // 5.发送ajax请求
            var url="http://127.0.0.1:8080/zx/login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj}).then(result=>{
                // console.log(result);
                //1.判断服务器返回结果
                if(result.data.code>0){
                    // 2.code:>0 条抓Home组件
                    // 3.创建xz/Home.vue组件
                    this.$toast("登陆成功")
                    this.$router.push("/index")
                    // 如果登录成功，则保存uname的值，并通过sessionStorage传递到其他界面
                    sessionStorage.setItem("u",this.uname)
                    // console.log(this.uname)
                }else{
                    this.$toast("亲爱的！你写错啦~~")
                }
                // 4.code<0 交互提示框
            });
        }
    }
}
</script>

<style>
.wang1{
    width:67px;
    margin-left:290px;
}
.wei{
    text-align: center;
    margin-top:40px;
}
.wei1{
    margin-left:30px;
}
.mint-header{
    background-color: #FF5E1C !important;
}
.mint-header-title{
    font-size: 20px !important;
}
.zhuce{
    text-align: center;
}
.zhuce1{
    margin-right:10px;
    border:1px solid #FF5E1C;
    background: white;
    border-radius: 5px;
    color:#FF5E1C;
    width:160px;
    height:30px;
}
.zhuce3{
    color:#FF5E1C;
    text-decoration:none;
}
.zhuce2{
    margin-right:10px;
    border:1px solid #FF5E1C;
    background: #FF5E1C;
    border-radius: 5px;
    color: white;
    width:160px;
    height:30px;
}
.denglu{
    padding: 15px;
        margin-top: -10px;
}
.wang{
    text-align: right;
    margin-right: 15px;
    color: #646464;
}
.qita{
    display:flex;
    text-align: center;
    padding: 15px;
    margin-top: 60px;
}
.qita i{
    width:118px;
    height:1px;
    background:#646464;
}
.qita span{
    margin:-13px 5px 0px 5px
}
</style>
