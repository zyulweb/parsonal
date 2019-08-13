<template>
<div class="dise">
    <div class="dise_1">
        <div class="lishi">
            <img src="../../img/shizhong.png" alt="">
            <h4>观看历史</h4>
        </div>
        <div class="oing">
            <div class="lishi_1">
                <img src="../../img/001 (1).jpg" alt="">
                <p>暮光之城</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (2).jpg" alt="">
                <p>别哭</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (3).jpg" alt="">
                <p>亲爱的小孩</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (4).jpg" alt="">
                <p>重返20岁</p>
            </div>
        </div>
        <div class="xian"></div>
        <div class="lishi">
            <img src="../../img/xiazai.png" alt="">
            <h4>我的缓存</h4>
        </div>
        <div class="oing">
            <div class="lishi_1">
                <img src="../../img/001 (5).jpg" alt="">
                <p>钢铁侠</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (6).jpg" alt="">
                <p>动物总动员</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (7).jpg" alt="">
                <p>金刚狼</p>
            </div>
            <div class="lishi_1">
                <img src="../../img/001 (8).jpg" alt="">
                <p>小时代</p>
            </div>
        </div>
        <div class="xian xian_1"></div>
        <div class="lishi">
            <img src="../../img/xin.png" alt="">
            <h4 class="shou">我的收藏</h4>
        </div>
        <div class="xian  xian_1"></div>
        <div class="lishi">
            <img src="../../img/pinglun.png" alt="">
            <h4 class="shou">我的评论</h4>
        </div>
        <div class="xian xian_1"></div>
        <div class="lishi feiji">
            <img src="../../img/feiji.png" alt="">
            <h4 class="shou">意见反馈</h4>
        </div>
        <div class="xian  xian_1"></div>
        <div class="lishi">
            <img src="../../img/shezhi.png" alt="">
            <h4 class="shou">设置</h4>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style>

.xian_1{
    margin-bottom:5px !important;
}
.shou{
    margin:0px 0px 0px 0px;
}
.xian{
    width:340px;
    height:2px;
    background:rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    margin-bottom: 12px;
}
.lishi h4{
    margin-top: 5px;
    margin-left: 15px;
}
.oing{
    display: flex;
    margin-top: -10px;
}
.dise_1{
    background:white;
    padding: 10px;
    width:345px;
    height:555px;
    margin:0  auto;
}
.dise{
    background: rgba(0, 0, 0, 0.1);
    height:580px;
}
.lishi{
    display: flex;

}
.lishi img{
    width:30px;
    height:30px;
}
.lishi_1 img{
    width: 76px;
    height: 100px;
    margin:5px;
}
.lishi_1 p{
    text-align: center;
}
</style>
