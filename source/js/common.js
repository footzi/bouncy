$(document).ready(function(){
   // var heightScreen = $(window).height();
   // $("header").css({
   // 		"height":heightScreen
   // })

   $(window).resize(function() {
	 var heightScreen = $(window).height();
    $("header").css({
    		"height":heightScreen
    })   	
   })
   $(window).resize()
});