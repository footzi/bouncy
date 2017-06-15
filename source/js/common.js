$(document).ready(function(){
	$(".icon").on("click", function() {
		$(".icon").removeClass("icon-active");
		$(this).addClass("icon-active");
		$(".about-details-content").hide();
		var select=$(this).attr("href");
		$(select).fadeIn();
	})
});

