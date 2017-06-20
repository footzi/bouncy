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

	$('#indicatorContainer').radialIndicator({
		radius:50,
		frameTime:50,
        barColor: '#19bd9a',
        barWidth: 1,
        initValue: 0,
        roundCorner : true,
        percentage: true

    });
    function test () {
    	
    }
  //   setTimeout(function() {
  //   	
  //   },100) 
  	var radialObj = $('#indicatorContainer').data('radialIndicator');
  	radialObj.animate(90)
	var curProgress = radialObj.animate().value;
	console.log(curProgress)

});

