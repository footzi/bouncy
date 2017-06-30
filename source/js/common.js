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
			$(".portfolio-link").removeClass("is-checked")
			$(".portfolio-products-column").removeClass("flex-row")
		
			$(this).addClass("is-checked")

		} else {
			$(".portfolio-products-item").hide()
			$(".portfolio-link").removeClass("is-checked")
			$(".portfolio-products-column").addClass("flex-row")
			
			$(this).addClass("is-checked")
			$(link).fadeIn()	

			
		}
	})

	// setInterval(function() {
	// 	$(".bar").each(function () {
	// 		var widthP = $(this).parent().width();
	// 		var width = Math.round($(this).width()/widthP*100)+"%";
	// 		var percent = $(this).parent().siblings(".progress-title").children(".progress-percent");
	// 		percent.empty().append(width);
	// 	})	
	// },200000);


	$(".news-carousel-second").hide();
	$(".btn-open").on("click", function() {
		$(this).parent().fadeOut();
		$(this).parent().siblings(".news-carousel-second").fadeIn();
	})
	$(".btn-close").on("click", function() {
		$(this).parent().fadeOut();
		$(this).parent().siblings(".news-carousel-first").fadeIn();
	})
});

