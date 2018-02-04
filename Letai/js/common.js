$( document ).ready(function() {
//проверка подключения
				// console.log( $("input[name='street']").val());
				$('.succes').hide();
				$('#connetion').on('click', function () {

								if($("input[name='street']").val() != ''){
												console.log( $("input[name='street']").val());
												$('.succes').slideDown();
												$('.checking_cnnetion form').hide();
												$('.succes').html('Поздравляем! Ваш дом подключен.');
								}else{
												$('.succes').slideDown();
												$('.succes').html('Заполните обязательные поля');
//                $('.checking_cnnetion input').css('border', '1px solid red');
												console.log( 'error');
								}
				});

				$(document).ready(function(){
								$('a[href*=\\#]').bind("click", function(e){
												var anchor = $(this);
												$('html, body').stop().animate({
																scrollTop: $(anchor.attr('href')).offset().top-60
												}, 1000);
												e.preventDefault();
								});
								return false;
				});


// кнопка наверх
				$('body').append('<div class="button-up" style=""></div>');

				$ (window).scroll (function () {
								if ($ (this).scrollTop () > 300) {
												$ ('.button-up').fadeIn();
								} else {
												$ ('.button-up').fadeOut();
								}
				});

				$('.button-up').click(function(){
								$('body,html').animate({
												scrollTop: 0
								}, 800);
								return false;
				});

				$('.button-up').hover(function() {
								$(this).animate({
												'opacity':'1',
								}).css({'background-position':'3px -240px','color':'#45688E'});
				}, function(){
								$(this).animate({
												'opacity':'0.7'
								}).css({'background-position':'3px -122px','color':'#45688E'});;
				});

// модальное окно
				var hiddenBox = $( "#popup" );
				$( ".open_modal" ).on( "click", function( event ) {
								hiddenBox.fadeIn(300);
				});
				var hiddenBox2 = $( "#list" );
				$( ".open_list" ).on( "click", function( event ) {
								hiddenBox2.fadeIn(300);
				});

				$(document).mouseup(function (e) {
								var container = $("#popup, #list");
		
								if (container.has(e.target).length === 0){
												container.fadeOut(300);
								}
				});

				$('#popup a.closes, #list a.closes').on('click', function () {
								$("#popup, #list").fadeOut(300);
								// $('.modal_foot').show();
								if($( window ).width()<=767){
												console.log('none');
												$('.modal_foot').attr('style', 'display:none!important');
								}else{
												console.log('block')
												$('.modal_foot').attr('style', 'display:block');
								}
								// $('.modal_foot').attr('style', 'display:block');
								$('#results').attr('style', 'display:none');
								$('form').show();
				});

});

// функция для кнопки меню
(function() {
				"use strict";
				var toggles = document.querySelectorAll(".cmn-toggle-switch");
				for (var i = toggles.length - 1; i >= 0; i--) {
								var toggle = toggles[i];
								toggleHandler(toggle);
				};

				function toggleHandler(toggle) {
								toggle.addEventListener( "click", function(e) {
												e.preventDefault();
												(this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
												var ulMenu = document.getElementsByClassName('ul_menu')[0];
											 (this.classList.contains("active") === true) ? ulMenu.classList.add('show') : ulMenu.classList.remove('show');
								});
				}
$('form').submit(function(e) {
						var $form = $(this);
						$.ajax({
								type: $form.attr('method'),
								url: 'mail.php',
								data: $form.serialize()
						}).done(function() {
//                console.log('success');
//                $('form input#phone').val = '';
//                document.getElementById('contactform')[0].reset();
								$('form input#fio').val('');
								$('form input#tel').val('');
								$('form input#address').val('');
								//$('form input#city').val('');
								//$('form select#tarif').val('');

								$('.modal_foot').hide();
								$('#results').attr('style', 'display:block');
								$('form').hide();

						}).fail(function() {
//                console.log('fail');
						});
						//отмена действия по умолчанию для кнопки submit
						e.preventDefault();
				});
})();