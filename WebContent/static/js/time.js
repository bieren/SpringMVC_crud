function date2str(x,y) { 
var z ={y:x.getFullYear(),M:x.getMonth()+1,d:x.getDate(),h:x.getHours(),m:x.getMinutes(),s:x.getSeconds()}; 
return y.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v) {return ((v.length>1?"0":"")+eval('z.'+v.slice(-1))).slice(-(v.length>2?v.length:2))}); 
} 

document.write(date2str(new Date(),"yyyy年")); 
var year = 2011, month = 6, date = 23;// month=6表示7月
var dt = new Date(year, month, date), dt2 = new Date();
 
    var dayNames = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");  
Stamp = new Date();  
document.write((Stamp.getMonth() + 1) +"月"+Stamp.getDate()+ "日"+ " " + dayNames[Stamp.getDay()] +"");  

// -->  