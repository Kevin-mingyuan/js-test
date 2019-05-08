// 判断每次登陆都触发广告图
// login页面 btn =>   
// setCookie(isLogin,"")


var newVisitor = isNewVisitor();// 如果是新访客
var llHref = 'http://www.steelji.com/';
if(newVisitor === true){ 
    // 动画弹出消息框 amaze ui 框架
    if(window.location.href === llHref){ 
        var $modal = $('#ll-open');
        $modal.modal();
        $('#ll-open2').click(()=>{
            window.location.href = 'http://www.steelji.com/user-safety.html';
        });

        $('#ll-open3').click(()=>{
            $modal.modal('close');
        })
    }

    // 标记：已经向该访客弹出过消息。30天之内不要再弹
    setCookie("user-visited","true", 7);
};

//退出按钮 设置为quit
$('#user-quit').click(function(){
    setCookie('user-visited','quit');
})

//判断是否已经登录
function isNewVisitor() {
    // 从cookie读取“已经向访客提示过消息”的标志位
    var flg = getCookie("user-visited");
    console.log(flg);
     if (flg === "") {
     return true; //已经登录
     } else {
      return false; //未登录
     }
}

//将token存入cookie
var isLogin = $('#user-id').attr('data-id'); //token 绑定dom 获取 
if(isLogin === undefined){
    setCookie('isLogin',false);
}else{
    setCookie('isLogin',isLogin);
}


