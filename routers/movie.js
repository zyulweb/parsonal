const express=require("express");
const router=express.Router();
const pool=require('../pool.js');





// 用户注册
router.get('/reg',function(req,res){
    // 获取get请求的数据  query数据
    var obj=req.query;
    //检测值是否为空
    if(!obj.uname){
          res.send({code:401,msg:'uname required'});
          //阻止往后执行
          return;
    }
    //检测密码是否为空
      if(!obj.upwd){
          res.send({code:402,msg:'upwd required'});
          //阻止往后执行
          return;
    }
    //执行SQL语句
      pool.query('INSERT INTO ms_user SET ?',[obj],function(err,result){
          if(err) throw err;
          console.log(result);
          //判断是否成功
          if(result.affectedRows>0){
              res.send({code:200,msg:'reg suc'});  
          }
      });
  });

//验证用户注册
router.get("/regex",(req,res)=>{
  // 1.参数
  var uname=req.query.uname;
  // 2.sql语句
  var sql="SELECT uid FROM ms_user WHERE uname=?"
  // 3.json
  pool.query(sql,[uname],(err,result)=>{
  if(err)throw err;
  if(result.length==0){
  res.send({code:-1,msg:"用户名不存在"});
  }else{
  // req.session.uid=result[0].id;
  res.send({code:1,msg:"用户名已存在"})
  }
  })
  })


// 用户登录
router.get("/login",(req,res)=>{
    // 1.参数
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    // 2.sql语句
    var sql="SELECT uid FROM ms_user WHERE uname=? AND upwd=?";
    // 3.json
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
          res.send({code:-1,msg:"用户名或密码有误"});
        }else{
          // req.session.uid=result[0].id;
          res.send({code:1,msg:"登录成功"})
        }
    })
})


module.exports=router;