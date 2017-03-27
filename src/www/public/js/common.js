/**
 * Created by wangle on 2016/6/5.
 */

//日期转换为本地时间字符串
function date2str(date){ //date object , or date string.
    var str = "";
    if(date){
        var d = new Date(date);
        str = (new Date(date)).toLocaleString();
        var today = new Date();
        if(d.toDateString() == today.toDateString()){
            str += " (今天)";
        }else if(d.toDateString() == (new Date(today.getFullYear(),today.getMonth(),today.getDate()-1)).toDateString()){
            str += " (昨天)";
        }
    }
    return str;
}