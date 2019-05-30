(function(doc,win){
    var docEl = doc.documentElement, //获取html元素
        resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize'; //判断有没有方向改变事件因为只有在移动端才会有此事件 
        // pc === resize  移动端 === orientationchange    => 对应的事件
        recalc = function(){
            var clientWidth = docEl.clientWidth; //拿到屏幕宽度
            console.log(clientWidth)
            if(!clientWidth) return;  //如果没有拿到屏幕宽度 =>结束
            docEl.style.fontSize = (clientWidth/15) + "px"; //在320px的设计图 1rem == 25px； 实际px/25 == ?rem;
         }
        if(!doc.addEventListener) return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false); //监听当窗口文档加载完成后
})(document,window)