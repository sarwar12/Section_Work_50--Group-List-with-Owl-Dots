$(document).ready(function($){
	$(".listing-carousel").owlCarousel({
		items:3,
		loop:true,
		autoplay:false,
		nav:false,
		//navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
		margin:30,
		dots:true,
	});
});