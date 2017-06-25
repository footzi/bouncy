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

	$(".portfolio-nav a").on("click", function() {
		var link=$(this).attr("data-filter")
		if (link==".all") {
			$(".portfolio-products-item").fadeIn()
			$(".portfolio-nav a").removeClass("is-checked")
			$(this).addClass("is-checked")

		} else {
			$(".portfolio-products-item").hide()
			$(".portfolio-nav a").removeClass("is-checked")
			$(this).addClass("is-checked")
			$(link).fadeIn()
		}
		
	})
    
});

