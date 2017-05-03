 window.onload=function(){ 
	//createUserMenu(); //页面初始化加载菜单
	
	        //=============临时测试数据结束=================
			//手动创建临时菜单看效果，之后改为读取数据库菜单数据循环创建菜单 
			var firstMenuStr = "<div id='head_display'></div><ul>";
			var secondMenuStr= "";
			var levelTwoMenuHtml=""; 
			var levelThreeMenuHtml=""; 
			
			//==============
			firstMenuStr +="<li id='1'><a href='#' class='nav_1'>系统管理</a></li>"; 
			levelTwoMenuHtml="";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>菜单管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"#\">菜单管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>网站管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"javascript:openMenu('1','网站内容管理','webManagerList.jsp')\">网站内容管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";   
			//==============
			firstMenuStr +="<li id='2'><a href='#' class='nav_2'>测试菜单一</a></li>"; 
			levelTwoMenuHtml=""; 
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>菜单管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"#\">菜单管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>网站管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"javascript:openMenu('2','网站内容管理','webManagerList.jsp')\">网站内容管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>"; 
			//==============
			firstMenuStr +="<li id='3'><a href='#' class='nav_3'>测试菜单二</a></li>"; 
			levelTwoMenuHtml=""; 
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>菜单管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"#\">菜单管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>网站管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"javascript:openMenu('3','网站内容管理','webManagerList.jsp')\">网站内容管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>"; 
			//=============
			firstMenuStr +="<li id='4'><a href='#' class='nav_4'>测试菜单三</a></li>"; 
			levelTwoMenuHtml=""; 
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>菜单管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"#\">菜单管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>网站管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"javascript:openMenu('4','网站内容管理','webManagerList.jsp')\">网站内容管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>"; 
			//=============
			firstMenuStr +="<li id='5'><a href='#' class='nav_6'>测试菜单四</a></li>"; 
			levelTwoMenuHtml=""; 
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>菜单管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"#\">菜单管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>";  
			
			levelTwoMenuHtml+="<li>";
			levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>网站管理</a></span>";
			levelTwoMenuHtml+="<p>"; 
			levelThreeMenuHtml=""; 
			levelThreeMenuHtml+="<a href=\"javascript:openMenu('5','网站内容管理','webManagerList.jsp')\">网站内容管理</a>"; 
		    levelTwoMenuHtml+=levelThreeMenuHtml; 
			levelTwoMenuHtml+="</p>";
			levelTwoMenuHtml+="<div class='clears'></div>";
			levelTwoMenuHtml+="</li>"; 
			//=============
			
		    secondMenuStr+="<ul id='nav_son_1'>"+levelTwoMenuHtml+"</ul>"; 
			firstMenuStr +="</ul>"; 
			//加入容器ֵ
			$(".nav_content").html(firstMenuStr);
			$(".nav_son").html(secondMenuStr);
		    //=============临时测试数据结束=================
	
 	$('.head_right_nav ul li').hover(function(){
			school_li=$('.head_right_nav ul li').index(this);//$('').index(this)搜索匹配的元素，并返回相应元素的索引值，从0开始计数。
			$(this).addClass('head_right_nav_'+school_li+'s');//$(this).addClass()为每个匹配的元素添加指定的类名。
			$(this).find($('.head_right_nav_display')).show();//搜索所有与指定表达式匹配的元素。这个函数是找出正在处理的元素的后代元素的好方法。
		},function(){
			$(this).removeClass('head_right_nav_'+school_li+'s');
			$(this).find($('.head_right_nav_display')).hide();
		});

 	$('#head_display').hover(function(){
			$(this).addClass('head_display');
		},function(){
			$(this).removeClass('head_display');
		});
					 
    var div=document.getElementById('head'); 
  
	nav_li=1;
	h=setInterval('nav()',100);
	
		$('.nav_content li').hover(function(){
			 nav_li=$('.nav_content ul li').index(this);
			var nav_content_id=$('.nav_content ul li').eq(nav_li).attr("id");
			//alert($("#"+nav_content_id).offset().left);
			var leftstr=$("#"+nav_content_id).offset().left;
			$("#nav_son_"+nav_content_id).css({top:"0px",left:leftstr+"px"});
			var htmlStr=$("#nav_son_"+nav_content_id).html();
			if(htmlStr==null || htmlStr==''){
				$('.nav_son ul').eq(nav_li).show().siblings().hide();
				$('.nav_son ul').eq(nav_li).hide();
			}else{
				$('.nav_son ul').eq(nav_li).show().siblings().hide();
			}
			 
			 
			 clearInterval(h);
		},function(){
			h=setInterval('nav()',100);
		});
		$('.nav_son ul').hover(function(){
		$('.nav_content li').eq(nav_li).addClass('nav_hover');
		clearInterval(h);
	},function(){
		$('.nav_content li').eq(nav_li).removeClass('nav_hover');
			h=setInterval('nav()',100);
	});

	$('.nav_content li').hover(function(){
		$(this).css('background','#10508F url(../images/small.png) no-repeat 129px -160px');
	},function(){
		$(this).css('background','url(../images/small.png) no-repeat 129px -160px');
	});
	
};

function nav(){
	$('.nav_son ul').eq(nav_li).css('display','none');
} 

function createUserMenu() {
	$.ajax({
		type : "post",
		url : "system/findUserMenu.action",
		async : false,
		data:{
			belongSystem:1
		},
		success : function(re) { 
			var levelOneMenu = re.levelOneMenu; //一级菜单
			var levelTwoMenu = re.levelTwoMenu; //二级菜单
			var levelThreeMenu = re.levelThreeMenu; //三级菜单
			var firstMenuStr = "<div id='head_display'></div><ul>";
			var secondMenuStr= "";
			var levelTwoMenuHtml="";
			var levelTwoCount=0;
			var levelThreeMenuHtml="";
			var levelThreeCount=0;
			if(levelOneMenu.length>0){
				for ( var i = 0; i < levelOneMenu.length; i++) {
					firstMenuStr +="<li id='"+levelOneMenu[i].MID+"'><a href='#' class='"+levelOneMenu[i].MENUCLASS+"'>"+levelOneMenu[i].MNAME+"</a></li>";
					levelTwoCount=0;
					levelTwoMenuHtml="";
					for ( var j = 0; j < levelTwoMenu.length; j++) {
						if(levelOneMenu[i].MID==levelTwoMenu[j].PARENTMENU){
							levelTwoMenuHtml+="<li>";
							levelTwoMenuHtml+="<div class='nav_son_t'><img src='../images/son_13.png'></div><span><a href='#'>"+levelTwoMenu[j].MNAME+"</a></span>";
							levelTwoMenuHtml+="<p>";
							levelThreeCount=0;
							levelThreeMenuHtml="";
							for(var k=0;k<levelThreeMenu.length;k++){
								if(levelTwoMenu[j].MID==levelThreeMenu[k].PARENTMENU){
									levelThreeMenuHtml+="<a href=\"javascript:openMenu('"+levelThreeMenu[k].MID+"','"+levelThreeMenu[k].MNAME+"','"+levelThreeMenu[k].MURL+"')\">"+levelThreeMenu[k].MNAME+"</a>";
									levelThreeCount++;
								}
							}
							if(levelThreeCount>0){
								levelTwoMenuHtml+=levelThreeMenuHtml;
							}
							levelTwoMenuHtml+="</p>";
							levelTwoMenuHtml+="<div class='clears'></div>";
							levelTwoMenuHtml+="</li>";
							levelTwoCount++;
						}
					}
					if(levelTwoCount>0){
						secondMenuStr+="<ul id='nav_son_"+levelOneMenu[i].MID+"'>"+levelTwoMenuHtml+"</ul>";
					}else{
						secondMenuStr+="<ul id='nav_son_"+levelOneMenu[i].MID+"'></ul>";
					}
				}
				firstMenuStr +="</ul>";
				//加入容器ֵ
				$(".nav_content").html(firstMenuStr);
				$(".nav_son").html(secondMenuStr);
			}
		}
	});

}


