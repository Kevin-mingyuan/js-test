const express = require("express");
const app = express();

const data = {
    dimensions: ['product', '角钢', '工字钢', '型钢','圆钢','槽钢'],
    source: [
        {'product':'2019-04-07','角钢':4330,'工字钢':5310,'型钢':1640,'圆钢':2240,'槽钢':3333},
        {'product':'2019-04-08','角钢':3331,'工字钢':6320,'型钢':4640,'圆钢':5240,'槽钢':4444},
        {'product':'2019-04-09','角钢':2330,'工字钢':5310,'型钢':7240,'圆钢':4240,'槽钢':5555},
        {'product':'2019-04-10','角钢':3330,'工字钢':4330,'型钢':2340,'圆钢':6240,'槽钢':6666},
        {'product':'2019-04-11','角钢':5330,'工字钢':3330,'型钢':5340,'圆钢':6240,'槽钢':7777},
        {'product':'2019-04-12','角钢':6330,'工字钢':2330,'型钢':5340,'圆钢':3240,'槽钢':8888},
        {'product':'2019-04-13','角钢':4330,'工字钢':5330,'型钢':6340,'圆钢':7240,'槽钢':9999},
    ]
}

app.get("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data)
})

app.listen(9000, () => console.log("hello ming!"));