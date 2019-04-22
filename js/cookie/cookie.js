function setCookie(key,val,n){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+n);
    document.cookie = key+"="+val+";expires="+oDate+";path=/";
}
function getCookie(key){
    var str = document.cookie;
    var arr = str.split("; ");
    for(var i = 0; i < arr.length; i++){
        var newArr = arr[i].split("=");
        if(newArr[0]==key){
            return newArr[1];
        }
    }
    return ""; //如果没有返回空
}
function removeCookie(key){
    setCookie(key,1,-1);
}

// document.cookie = "key"+"=name"+";expires="+new Date()+";path=/";
