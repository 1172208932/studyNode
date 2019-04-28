//定义接口
function Iterator(arry){
    var _arrob = new _arr(arry)
    for(var i =0 ;i<arry.length;i++){
        _arrob[i] = arry[i]
        _arrob.length ++
    }
}

//构造器类
function _arr(arry){
    this.arry = arry
    this.length = 0
}