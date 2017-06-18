$(function() {

	function clock() {
		var d = new Date();
		var month_num = d.getMonth()
		var day = d.getDate();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();

		month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
			"июля", "августа", "сентября", "октября", "ноября", "декабря");

		if (day <= 9) day = "0" + day;
		if (hours <= 9) hours = "0" + hours;
		if (minutes <= 9) minutes = "0" + minutes;
		if (seconds <= 9) seconds = "0" + seconds;

		date_time = "Сегодня " + day + " " + month[month_num];
		// + " " + d.getFullYear() +
		//" г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds
		if (document.layers) {
			document.layers.doc_time.document.write(date_time);
			document.layers.doc_time.document.close();
		}
		else document.getElementById("doc_time").innerHTML = date_time;
		setTimeout("clock()", 1000);
	}
	clock();
		//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("visible");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	$("a[href='#callback']").click(function() {
		var dataForm = $(this).data("form");
		var dataText = $(this).data("text");
		$(".form-callback h4").text(dataText);
		$(".form-callback [name=admin-data]").val(dataForm);
	});

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

	$(".popup-gallery").each(function() {
		$(this).magnificPopup({
			delegate: 'a',
			mainClass: 'mfp-zoom-in',
			type: 'image',
			tLoading: '',
			gallery:{
				enabled: true,
			},
			removalDelay: 300,
			callbacks: {
				beforeChange: function() {
					this.items[0].src = this.items[0].src + '?=' + Math.random(); 
				},
				open: function() {
					$.magnificPopup.instance.next = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
					}
					$.magnificPopup.instance.prev = function() {
						var self = this;
						self.wrap.removeClass('mfp-image-loaded');
						setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
					}
				},
				imageLoadComplete: function() { 
					var self = this;
					setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
				}
			}
		});
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
