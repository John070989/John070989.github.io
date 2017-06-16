$(function() {

	$(function() {
		var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	function heightses() {
		$(".catalog-item .catalog-content h4").height('auto').equalHeights();
		$(".catalog-item .catalog-content p").height('auto').equalHeights();
	}

	$(window).resize(function() {
		heightses();
	});

	heightses();

	jQuery(".eTimer").eTimer({
		etType: 1, etDate: "04.06.2017.0.0", etShowSign: 1, etSep: ":", etTextColor: "#fff", etLastUnit: 4, etNumberSize: 30, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#444", etNumberBorderRadius: 2, etNumberShadow: " 0px 0px 5px 0px rgba(0, 0, 0, 0.5)"
	});

	$(".top-nav a").mPageScroll2id({
		offset: 85
	});

	$(".image-popup-tizer").each(function(e) {

		var th = $(this);

		th.attr("href", "#catalog-img-" + e)
		.find(".content-popup-item")
		.attr("id", "catalog-img-" + e);

	});

	$(".image-popup-tizer").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});	

	$(".owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			520:{
				items:1,
			},
			560:{
				items:2,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:1,
			}
		}
	});


});
