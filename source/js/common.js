$(document).ready(function(){
	$(".icon").on("click", function() {
		$(".icon").removeClass("icon-active");
		$(this).addClass("icon-active");
		$(".about-details-content").hide();
		// var select=$(this).attr("href");
		var select=$(this).attr("data-link");
		console.log(select)
		$(select).fadeIn();
	})





	// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
});

