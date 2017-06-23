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

	
        var $container = $('.isotope');
        $('#filters a').click(function(){
			
            var $this = $(this);
            if ( !$this.hasClass('is-checked') ) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
                }
            var selector = $this.attr('data-filter');
            $container.isotope({  itemSelector: '.portfolio-products-item', filter: selector });
            return false;
        });
    
// 		$('.grid').masonry({
//   // options...
// 		itemSelector: '.grid-item',
// 		columnWidth: 100,
// 		gutter:5,
// 		isFitWidth:true
// });
});

