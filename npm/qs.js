const qs =  require('qs');
let urlStr = 'name=kevin&age=23';
let urlObj = {
    name:'kevin',
    age:23
}
console.log(qs.parse(urlStr)); //{ name: 'kevin', age: '23' }
console.log( 'http://www.baidu.com?' +qs.stringify(urlObj)); //http://www.baidu.com?name=kevin&age=23