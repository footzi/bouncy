$(document).ready(function(){

	$("#governance, #creative").hide();
	
	$(".icon").on("click", function() {
		$(".icon").removeClass("icon-active");
		$(this).addClass("icon-active");
		$(".about-details-content").hide();
		var select=$(this).attr("data-link");
		console.log(select)
		$(select).fadeIn();
	})

});

