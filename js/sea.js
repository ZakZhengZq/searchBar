/**
 * Created by hunter on 2017/9/16.
 */
//事件对象
var EventUtil={
    addHandle:function(target,event,cb){

    }
}
function onInput(e) {
    var v=e.target.value.trim()
    if (v!== ''){
        var a=document.createElement('script');
        a.src='http://www.baidu.com/su?&wd=' + encodeURI(v) + '&p=3&cb=fcb';
        document.body.appendChild(a);
    }
}
function fcb(data){
    var newUl=document.createElement("ul");
    if (data){
        data.s.forEach(function (val) {
            var li=document.createElement("li");
            li.textContent=val;
            newUl.appendChild(li);
        })
    }
}
