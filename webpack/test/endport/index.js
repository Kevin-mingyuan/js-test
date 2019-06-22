const express = require('express');
const path = require('path');
const app = express();
const apiRoute = express.Router();

//加载指定目录静态资源
app.use(express.static(__dirname + '/dist'));

//配置任何请求都转到index.html，而index.html会根据React-Router规则去匹配任何一个route
app.get('*', function (request, response){
//     // response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
    response.sendFile(path.resolve(__dirname, '../src', 'index.html'))
});

  apiRoute.get("/",(req,res)=>{
    res.send("success open /");
  });

  apiRoute.get("/home",(req,res)=>{
    res.send("success open home");
  });

  apiRoute.get("/home2",(req,res)=>{
    res.send("success open home2");
  });

app.use(apiRoute);

app.listen("3000", function () {
  console.log("server started on port " + 3000)
})