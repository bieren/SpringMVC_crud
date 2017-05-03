/**
	1、首页底部tab打开
	2、首页底部tab关闭
	3、首页底部tab切换
	
	create by houll 2014-01-05
**/


//保存打开的菜单Tab的ID值
var MenuStrId = '#m0#';

//底部tab数量最大值
var TAB_NUMBER=10;


/**
	选择tab标签页
**/
function selectTab(obj){
	//给每一个tab标签li加上class=foothome
	$("#footUl").find('li').each(function (){
		//找到当前选中的tab
		if($(this).attr('class')==''||$(this).attr('class')==null){
			//取消选中状态
			$(this).addClass('foothome');
			//隐藏tab标签对应的iframe框
			$($(this).attr("id")).hide();
		}
	});
	//设置选中状态
	$(obj).parent('li').removeClass();
	
	//显示选中tab标签对应的iframe框
	$($(obj).parent('li').attr("id")).show();
	
	//设置菜单
	$(".nav_content ul li").each(function (){
		if($(obj).parent('li').attr("id").indexOf($(this).attr("id"))>-1){
			$(this).addClass("nav_hover");
		}else{
			$(this).removeClass("nav_hover");
		}
	});	
	
}




/**
	删除tab标签
**/
function closeTab(obj){
	//删除tab字符串里面包含的id
	MenuStrId=MenuStrId.replace(";"+$(obj).parent('li').attr('id')+"#",'');
	
	//删除tab标签
	$(obj).parent('li').remove();
	
	//判断是否为当前显示tab
	if($(obj).parent('li').attr('class')==''||$(obj).parent('li').attr('class')==null){
		//如果删除的tab为当前显示页，则设置最后一个tab为选中状态
		$("#footUl").find('li').last().removeClass();
		
		//删除当前显示的iframe
		$($(obj).parent('li').attr("id")).remove();
		
		//设置最后一个tab为当前显示iframe
		$($("#footUl").find('li').last().attr("id")).show();
		
		//设置菜单
		$(".nav_content ul li").each(function (){
			if($("#footUl").find('li').last().attr("id").indexOf($(this).attr("id"))>-1){
				$(this).addClass("nav_hover");
			}else{
				$(this).removeClass("nav_hover");
			}
		});	
		
	}else{
		//删除当前选中的iframe
		$($(obj).parent('li').attr("id")).remove();
	}
}



/**
	打开菜单
**/
function openMenu(mid,mname,murl){
	//如果没打开过该菜单，就增加，否则只是切换
	if(MenuStrId.indexOf(";#"+mid+"#")==-1){
		
		var liSize = $("#footUl").find('li').size();
		//如果大于10个tab标签，就删掉前面第二个再增加tab
		if(liSize>=TAB_NUMBER){
			MenuStrId=MenuStrId.replace(";"+$($("#footUl").find('li')[1]).attr("id")+"#",'');
			$($($("#footUl").find('li')[1]).attr("id")).remove();
			$($("#footUl").find('li')[1]).remove();
		}
		
		//给每一个tab标签li加上class=foothome
		$("#footUl").find('li').each(function (){
			//找到当前选中的tab
			if($(this).attr('class')==''||$(this).attr('class')==null){
				//取消选中状态
				$(this).addClass('foothome');
				//隐藏tab标签对应的iframe框
				$($(this).attr("id")).hide();
			}
		});
		//增加tab页
		$("#footUl").append("<li class='' id='#"+mid+"'><a href='#' onclick='selectTab(this)'>"+mname+"</a><div class='footer_li_none' onclick='closeTab(this)'></div></li>");
		MenuStrId += ";#"+mid+"#";
		//增加一个aframe
		var content = "<iframe src = '"+murl+"' id='"+mid+"' style='width:100%;height:100%;border:0px;'></iframe>"
		$("#index_content").append(content);
		
	}else{
		$("#footUl").find('li').each(function (){
			//找到当前选中的tab
			if($(this).attr('class')==''||$(this).attr('class')==null){
				//取消选中状态
				$(this).addClass('foothome');
				//隐藏tab标签对应的iframe框
				$($(this).attr("id")).hide();
			}
		});
		//显示该菜单
		$("#"+mid).show();
		//设定该菜单对应tab为选中状态
		$("#footUl").find('li').each(function (){
			//找到当前选中的tab
			if($(this).attr('id')=='#'+mid){
				//设定选中状态
				$(this).removeClass();
			}
		});
	}
}