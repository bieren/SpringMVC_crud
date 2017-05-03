// JavaScript Document
$(document).ready(function(e) {
    $("#dowebok").fullpage({
		sectionsColor: ['#1bbc9b', '#f8f8f8', '#fff', '#f8f8f8' , "#fff"],
		afterRender: function(){
			$(".banner_img").each(function(){
				var rel = $(this).attr("rel");
				var arr = rel.split(",");
				$(this).animate({
					left:arr[1] + "px",
					top:arr[2] + "px",
					},500);
				});
			
			$(".index_about h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_about sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_about .img").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_about .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				
				$(".index_way h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .map").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				
				$(".index_like h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_like sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_like .li li").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				
				$(".index_news h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_news sub").each(function(){
					var rel = $(this).attr("rel");
				   /*var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); */
					});
				
				
				
				
			},
		afterLoad: function(anchorLink, index){
			if(index==1){
				$(".banner_img").each(function() {
                   var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[1] + "px",
					   top:arr[2] + "px",
					   }, 500); 
                });
				}
			if(index==2){
				$(".index_about h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_about .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_about .img").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_about .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				}
			
			if(index==3){
				$(".index_like h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_like .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_like .li li").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				}
			
			if(index==4){
				$(".index_news h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_news .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_news .img").fadeIn("fast");
				$(".index_news .new").fadeIn("fast");
				$(".index_news span").fadeIn("fast");
				}
			
			
			if(index==5){
				$(".index_way h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_way .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_way .map").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				$(".index_way .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[0] + "px",
					   top:arr[1] + "px",
					   }, 500); 
					});
				}
			
			},
			
		onLeave: function(index, direction){
			if(index==1){
				$(".banner_img").each(function() {
                   var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[0] + "px",
					   },200)
                });
				}
				
			if(index==2){
				$(".index_about h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 200); 
					});
				$(".index_about sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 200); 
					});
				$(".index_about .img").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 200); 
					});
				$(".index_about .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 200); 
					});
			}
			
			if(index==3){
				$(".index_like h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_like sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_like .li li").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				}
			if(index==4){
				$(".index_news h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_news .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_news .img").fadeOut("fast");
				$(".index_news .new").fadeOut("fast");
				$(".index_news span").fadeOut("fast");
				}
			
			
			if(index==5){
				$(".index_way h1").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .sub").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .map").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   left:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				$(".index_way .font").each(function(){
					var rel = $(this).attr("rel");
				   var arr = rel.split(",");
				   $(this).animate({
					   right:arr[2] + "px",
					   top:arr[3] + "px",
					   }, 500); 
					});
				}
			
			
			},
		});
	var Height = $(window).innerHeight();
	$(".banner").height(Height);
	$(".scropt").click(function(){
	$(window).scrollTop(0);
	});
	
	
	
	
});

	



