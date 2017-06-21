
var c1=$('.chart-1')
var c2=$('.chart-2')
var c3=$('.chart-3')

c1.circleProgress({
		value: 0.6,
		thickness:2,
		animation:{duration:5000}
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
	});


 c2.circleProgress({
		value: 0.8,
		thickness:2,
		animation:{duration:6000}
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
	});


 c3.circleProgress({
		value: 1,
		thickness:2,
		animation:{duration:7000}
	}).on('circle-animation-progress', function(event, progress) {
		$(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
	});
    
 setInterval(function() { c1.circleProgress(),c2.circleProgress(),c3.circleProgress(); }, 8000);