const express = require('express');
const app = express();

const apiRoutes = express.Router();

const appData = require("./data.json");
const seller = appData.seller; //http://localhost:5000/api/seller
const goods = appData.goods; //http://localhost:5000/api/goods
const ratings = appData.ratings; //http://localhost:5000/api/ratings
//跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'application/json')
    next();
});

apiRoutes.get("/seller",(req,res)=>{
    res.json({
        errno:0,
        seller:seller
    })
});

apiRoutes.get("/goods",(req,res)=>{
    res.json({
        errno:0,
        goods:goods
    })
});

apiRoutes.get("/ratings",(req,res)=>{
    res.json({
        errno:0,
        ratings:ratings
    })
});
app.listen(5000,(err)=> {
    if(!err){
        console.log('Server is running on port 5000')
    }
});

app.use("/api",apiRoutes);