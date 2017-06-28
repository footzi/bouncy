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

	
	setInterval (function() {
		var widthPr = $(".progress").width();
		
		var widthBar1 = Math.round($(".bar-1").width()/widthPr*100)+"%";

		$(".progress-percent-1").empty().append(widthBar1);

		var widthBar2 = Math.round($(".bar-2").width()/widthPr*100)+"%";
		$(".progress-percent-2").empty().append(widthBar2);

		var widthBar3 = Math.round($(".bar-3").width()/widthPr*100)+"%";
		$(".progress-percent-3").empty().append(widthBar3);
	},10);
	
});

