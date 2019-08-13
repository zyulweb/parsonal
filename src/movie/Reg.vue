<template>
    <div>
        <mt-header class="a" title="注册">
            <router-link to="/Login" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="denglu">
           <mt-field class="denglu1" label="用户名" placeholder="请输入用户名" v-on:input="change" v-model="uname"></mt-field>
           <p id="p1">{{msg}}</p>
           <mt-field class="denglu2" label="密码" placeholder="请输入密码"  v-on:input="change" type="password" v-model="upwd"></mt-field>
           <p id="p2">{{msg1}}</p>

           <mt-field class="denglu2" label="确认密码" placeholder="请再次输入密码"  v-on:input="change" type="password" v-model="upwdd"></mt-field>
           <p id="p3">{{msg2}}</p>

        </div>
        <div class="zhuce">
            <button @click="reg" class="zhuce2">注册</button>
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
            upwd:"",
            upwdd:"",
            msg:'用户名在3~6位',
            msg1:'密码3~12位字符',
            msg2:'',
            u:0,
            p:0,
            p2:0
        }
    },
    methods:{
        change(){
            var uname=this.uname;
            var upwd=this.upwd;
            var upwdd=this.upwdd;
            //获取事件对象
            var p1=document.getElementById('p1');
            var p2=document.getElementById('p2')
            var p3=document.getElementById('p3')
            //创建正则来验证
            var reg=/^\w{3,8}$/i;
            var upwdreg=/^\w{3,12}$/i;
            //验证用户名
            if(uname==""){this.msg="用户名不能为空";p1.style.color="#f00";this.u=0}
            else if(!reg.test(uname)){this.msg="用户名3~8位字符";p1.style.color="#f00";this.u=0}
            else{
                var url="http://127.0.0.1:8080/zx/regex";
                var obj={uname:uname};
                this.axios.get(url,{params:obj}).then(result=>{
                    //1.判断服务器返回结果
                    if(result.data.code>0){
                        this.msg="用户名已存在";
                        p1.style.color="#f00";
                        this.u=0; 
                    }else{
                        this.msg="格式规范";
                        p1.style.color="green" 
                        this.u=1;   
                    } 
                })
            }
            //验证密码
            if(upwd==""){this.msg1="密码不能为空";p2.style.color="#f00";this.p=0}
            else if(!reg.test(upwd)){this.msg1="密码3~12位字符";p2.style.color="#f00";this.p=0}
            else{ this.msg1="密码格式规范";p2.style.color="green";this.p=1}
            //验证密码两次是否相同
            if(upwd!==upwdd){this.msg2="两次密码需要一致";p3.style.color="#f00";this.p2=0}
            else{ this.msg2="两次密码相同";p3.style.color="green";this.p2=1}
        },
        reg(){
            if(this.u==1 && this.p==1 && this.p2==1){
                var url="http://127.0.0.1:8080/zx/reg";
                var obj={uname:this.uname,upwd:this.upwd}
                this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code==200){
                        this.$toast('注册成功')
                        this.$router.push('/login')
                    } 
                })   
            }else{
                this.$toast('注册失败')
            }   
        }
        //     var p=this.uname;
        //     if(""==p){
        //         this.$toast("用户名不能为空")
        //     }else if(p.length<3){
        //         this.$toast("用户名不能小于3位")
        //     }else if(p.length>8){
        //         this.$toast("用户名不能大于8位")
        //         return
        //     }
        //     var p1=this.upwd;
        //     if(""==p1){
        //         this.$toast("密码不能为空")
        //     }else if(p1.length<6){
        //         this.$toast("密码不能小于6位")
        //     }else if(p1.length>12){
        //         this.$toast("密码不能大于12位")
        //         return
        //     }
        //     var p2=this.upwdd;
        //     if(p2==p1&&p2!==""){
        //         this.$router.push('/Login');
        //         this.$messagebox.confirm("注册成功，是否跳转登录页面")
        //         .then(action=>{
        //             this.$toast("跳转成功")
        //         }).catch(err=>{
        //         this.$router.push('/Reg');
        //         })
        //     }else{
        //         this.$toast("密码输入不一致，请重新输入")
        //     }
        }
    }

</script>

<style>
p{
    margin:0;
    color:#999999;
    font-size: 14px;
    display: block;
    height:20px;
}


</style>
