$(document).ready(function () {

	$('.isotope-item').isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'
	});

	var $grid = $('.isotope-item').isotope({
		itemSelector: '.item',
		layoutMode: 'fitRows'

	});

	$grid.imagesLoaded().progress(function () {
		$grid.isotope('layout');
	});


	$('.nav-item').click(function () {
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.isotope-item').isotope({
			filter: selector
		});
		return false;
	});

	$.fn.menumaker = function (options) {



		var cssmenu = $(this), settings = $.extend({

			title: "Menu",

			format: "dropdown",

			sticky: false

		}, options);



		return this.each(function () {



			cssmenu.prepend('<div id="menu-button"><span></span><span></span><span></span>' + settings.title + '</div>');

			$(this).find("#menu-button").on('click', function () {

				$(this).toggleClass('menu-opened');

				var mainmenu = $(this).next('ul');

				if (mainmenu.hasClass('open')) {
					$('body').css('overflow', 'auto');
					mainmenu.slideUp().removeClass('open');

				}

				else {
					$('body').css('overflow', 'hidden');
					mainmenu.slideDown().addClass('open');

					if (settings.format === "dropdown") {

						mainmenu.find('ul').slideDown();

					}

				}

			});



			cssmenu.find('li ul').parent().addClass('has-sub');



			multiTg = function () {

				cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');

				cssmenu.find('.submenu-button').on('click', function () {

					$(this).toggleClass('submenu-opened');

					if ($(this).siblings('ul').hasClass('open')) {

						$(this).siblings('ul').removeClass('open').slideUp();

					}

					else {

						$(this).siblings('ul').addClass('open').slideDown();

					}

				});

			};



			if (settings.format === 'multitoggle') multiTg();

			else cssmenu.addClass('dropdown');





		});

	};



	$(".navy").menumaker({

		title: "Navigation",

		format: "multitoggle"

	});





	$('#menu-button').click(function () {

		$(this).toggleClass('open');

	});

});

