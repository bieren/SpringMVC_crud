//控制左边的高度
var winWidth = 0;
var winHeight = 0;
function findDimensions() //函数：获取尺寸
{
//获取窗口宽度
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
//获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
winHeight = document.documentElement.clientHeight;
winWidth = document.documentElement.clientWidth;
}
//结果输出至两个文本框
winHeights=winHeight+'px';
winHeight=winHeight-47-79-31+'px';


 return height='<style>.iframes{height:'+winHeight+';} .content,.index_content{height:'+winHeights+';}</style>';
}
//findDimensions();
//调用函数，获取数值
//window.onresize=findDimensions;
