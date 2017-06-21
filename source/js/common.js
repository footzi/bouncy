$(document).ready(function(){

	$("#governance, #creative, #graphic, #game, #full").hide();
	
	$(".icon").on("click", function() {
		var select=$(this).attr("data-link");
		if ((select == "#customer")||(select == "#governance")||(select == "#creative")) {
			$(".about-details-icons .icon").removeClass("icon-active");
			$(this).addClass("icon-active");
			$(".about-details-content").hide()
		} else {
			$(".services-content-icon .icon").removeClass("icon-active");
			$(this).addClass("icon-active");
			$(".services-content-item").hide()
		}
		$(select).fadeIn();
	})

});

