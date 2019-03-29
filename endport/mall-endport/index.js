const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器

app.use(bodyParser.json())//添加json解析器

const data = [{
  id: 1,
  name: 'Chicago Bulls',
  desc: '芝加哥111'
},
{
  id: 2,
  name: 'Cleveland Cavaliers',
  desc: '克里夫兰骑士'
}, {
  id: 3,
  name: 'Detroit Pistons',
  desc: '123'
}, {
  id: 4,
  name: 'Indiana Pacers',
  desc: '印第安纳步行者'
}, {
  id: 5,
  name: 'Chicago Bulls',
  desc: '芝加哥公牛'
}, {
  id: 6,
  name: 'Cleveland Cavaliers',
  desc: '克里夫兰骑士'
}, {
  id: 7,
  name: 'Detroit Pistons',
  desc: '底特律活塞'
}, {
  id: 8,
  name: 'Indiana Pacers',
  desc: '印第安纳步行者'
}, {
  id: 9,
  name: 'Chicago Bulls',
  desc: '芝加哥公牛'
}, {
  id: 10,
  name: 'Cleveland Cavaliers',
  desc: '克里夫兰骑士'
}, {
  id: 11,
  name: 'Detroit Pistons',
  desc: '底特律活塞'
}, {
  id: 12,
  name: 'Indiana Pacers',
  desc: '印第安纳步行者'
}, {
  id: 13,
  name: 'Chicago Bulls',
  desc: '芝加哥公牛'
}, {
  id: 14,
  name: 'Cleveland Cavaliers',
  desc: '克里夫兰骑士'
}, {
  id: 15,
  name: 'Detroit Pistons',
  desc: '底特律活塞'
}, {
  id: 16,
  name: 'Indiana Pacers',
  desc: '印第安纳步222'
}
]
let newArr = [];
app.post('/data', (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    console.log(req.body);

    let {pageSize , pageNumber , desc} = req.body; //每页展示 , 点击页码

    data.forEach((item)=>{
      if(item.desc == desc){  
        console.log(item , "000000");
          // newArr.push(item)
          res.send({
            "pageSize": 5,
            "pageNumber":1,
            "totalRow":data.length,
            "totalPage":2,
            "list":[item],  
        });
      }else{
        console.log("nothing")
          res.send({
            "pageSize": 5,
            "pageNumber":1,
            "totalRow":data.length,
            "totalPage":2,
            "list":data.slice((pageNumber -1)*pageSize , pageNumber * pageSize),  
        });
      }
    })

   
})

app.listen(3000, () => console.log('hello ming!'))