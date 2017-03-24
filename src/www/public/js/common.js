/**
 * Created by wangle on 2016/6/5.
 */

//日期转换为本地时间字符串
function date2str(date){ //date object , or date string.
    var str = "";
    if(date){
        var d = new Date(date);
        str = (new Date(date)).toLocaleString();
        if(d.toDateString() == ((new Date).toDateString())){
            str += " (今天)";
        }
    }
    return str;
}