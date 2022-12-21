AOS.init();

(function ($) {

	"use strict";

	// Page loading animation
	$(window).on('load', function () {

		$('#js-preloader').addClass('loaded');

	});



	$('.filters ul li').click(function () {
		$('.filters ul li').removeClass('active');
		$(this).addClass('active');

		var data = $(this).attr('data-filter');
		$grid.isotope({
			filter: data
		})
	});

	var $grid = $(".grid").isotope({
		itemSelector: ".all",
		percentPosition: true,
		masonry: {
			columnWidth: ".all"
		}
	})

	var width = $(window).width();
	$(window).resize(function () {
		if (width > 992 && $(window).width() < 992) {
			location.reload();
		}
		else if (width < 992 && $(window).width() > 992) {
			location.reload();
		}
	})



	$(document).on("click", ".naccs .menu div", function () {
		var numberIndex = $(this).index();

		if (!$(this).is("active")) {
			$(".naccs .menu div").removeClass("active");
			$(".naccs ul li").removeClass("active");

			$(this).addClass("active");
			$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

			var listItemHeight = $(".naccs ul")
				.find("li:eq(" + numberIndex + ")")
				.innerHeight();
			$(".naccs ul").height(listItemHeight + "px");
		}
	});

	$('.owl-features').owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		nav: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1000: {
				items: 3
			},
			1800: {
				items: 4
			}
		}
	})

	$('.owl-team').owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		margin:20,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			}
		}
	})

	$('.owl-collection').owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		nav: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.owl-banner').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		nav: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})





	// Menu Dropdown Toggle
	if ($('.menu-trigger').length) {
		$(".menu-trigger").on('click', function () {
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				var width = $(window).width();
				if (width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);
				}
				$('html,body').animate({
					scrollTop: (target.offset().top) - 80
				}, 700);
				return false;
			}
		}
	});

	$(document).ready(function () {
		$(document).on("scroll", onScroll);

		//smoothscroll
		$('.scroll-to-section a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('.scroll-to-section a').each(function () {
				$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash,
				menu = target;
			var target = $(this.hash);
			$('html, body').stop().animate({
				scrollTop: (target.offset().top) - 79
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});

	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.nav ul li a').removeClass("active");
				currLink.addClass("active");
			}
			else {
				currLink.removeClass("active");
			}
		});
	}


	// Page loading animation
	$(window).on('load', function () {
		if ($('.cover').length) {
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function () {
			setTimeout(function () {
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});



	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

	// Open/Close Submenus
	if (dropdownOpener.length) {
		dropdownOpener.each(function () {
			var _this = $(this);

			_this.on('tap click', function (e) {
				var thisItemParent = _this.parent('li'),
					thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

				if (thisItemParent.hasClass('has-sub')) {
					var submenu = thisItemParent.find('> ul.sub-menu');

					if (submenu.is(':visible')) {
						submenu.slideUp(450, 'easeInOutQuad');
						thisItemParent.removeClass('is-open-sub');
					} else {
						thisItemParent.addClass('is-open-sub');

						if (thisItemParentSiblingsWithDrop.length === 0) {
							thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
								submenu.slideDown(250, 'easeInOutQuad');
							});
						} else {
							thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
								submenu.slideDown(250, 'easeInOutQuad');
							});
						}
					}
				}

				e.preventDefault();
			});
		});
	}




	$('.fa-minus-circle').click(function () {
		let pm = $(this).next(".pronum").html();
		pm--
		if (pm <= 0) {
			pm = 0
		}
		$(this).next(".pronum").html(pm);
	})

	$('.fa-plus-circle').click(function () {
		let pm = $(this).prev(".pronum").html();
		pm++
		if (pm >= 10) {
			pm = 10
		}
		$(this).prev(".pronum").html(pm);

	})

	
	var total_qty = 0;//總計
	var item_list = "";
	var name_ary = new Array("柃岬串串", "璟珣串串", "藍翠串串", "石琥串串", "夏鳴串串", "奧爾串串","柃岬立牌", "璟珣立牌", "藍翠立牌", "石琥立牌", "夏鳴立牌", "奧爾立牌","柃岬勳章", "璟珣勳章", "藍翠勳章", "石琥勳章", "夏鳴勳章", "奧爾勳章", "筆袋/A款", "筆袋/B款", "筆袋/C款", "手提帆布袋", "束口帆布袋");
	var price_ary = new Array("150", "150", "150", "150", "150", "150", "100", "100", "100", "100", "100", "100", "35", "35", "35", "35", "35", "35", "50", "50", "50", "150", "180");
	$(".btn-danger").click(function () {
		$(".pronum").each(function (e) {
			if (parseInt($(this).text()) != 0) {
				item_list +=  name_ary[e] + " : " + parseInt($(this).text()) + "個 ";
				total_qty += parseInt($(this).text()) * price_ary[e];
			}
		});
		if (total_qty === 0){
			alert('請選擇商品')
		} else {
			$("#check").modal('show')
		}
		$('.sendp').html(item_list)
		$('.sendm').html(total_qty)
		// output_text += "\n總計 : " + total_qty + "元";
		// $("#output_text").val(output_text);
		// $('.sendp').html(output_text)
		item_list = ""
		total_qty = 0
	});

})(window.jQuery);

window.addEventListener('scroll', () => {
	let scrbox = window.pageYOffset
	$('.sec1bg').css('transform', 'translateY(' + scrbox * 0.4 + 'px)')
	if (window.scrollY > 0) {
		$('.background-header').addClass('scroll')
	} else {
		$('.background-header').removeClass('scroll')
	}
})

window.addEventListener('mousemove', (event) => {
	posx = event.clientX - window.innerWidth / 2
	posy = event.clientY - window.innerHeight / 2
	$('.bgitem').css('transform', 'translate(' + posx * -0.0002 + '%,' + posy * -0.0002 + '%)')
	$('.bgimg').css('transform', 'translate(' + posx * 0.0004 + '%,' + posy * 0.0004 + '%)')

})



/******************************************** */




