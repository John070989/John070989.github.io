$(function() {

   var pos = document.getElementById("time");
   function time() {
      var today = new Date();
      var day_of_week = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
      var month_of_year = ["Января", "Февраля", "Марта", "Апреля", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
      var day_ = day_of_week[today.getDay()];
      var date_ = today.getDate();
      var month_ = month_of_year[today.getMonth()-1];
      var year_ = today.getFullYear();
      var hours_ = today.getHours();
      var min_ = today.getMinutes();
      var sec_ = today.getSeconds();
      var zerom = zeros = '';
      if(min_ < 10) zerom = '0';
      if(sec_ < 10) zeros = '0';
      pos.innerHTML = ' Сегодня '+date_+' '+month_+' '+year_;
      //pos.innerHTML = day_+' '+date_+' '+month_+' '+year_+' г. '+hours_+':'+zerom+min_+':'+zeros+sec_;
   }
   setInterval(time, 1);
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
