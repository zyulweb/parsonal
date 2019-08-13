// 引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");

// 引入路由
const zx=require("./routers/movie")

// 跨域
var server=express();
server.use(cors({
  origin:["http://127.0.0.1:3000","*","http://localhost:3000"],
  credentials:true
}))


// 配置连接池
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'mstx',
  connectionLimit:20
});

// session
server.use(session({
    secret:"128为字符串",
    resave:true,
    saveUnintialized:true
}))

// 设置监听端口号
server.listen(8080);








 //  2.9指定静态目录
 server.use(express.static("public"))


// 路由管理
server.use("/zx",zx)