$(function () {

	/* Preloader */
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');

	/* Parallax */
	if($('#scene')[0]) {
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);

		var scene2 = document.getElementById('scene2');
		var parallaxInstance = new Parallax(scene2);
	}

	/* Slider */
	if($('#slider')[0]) {
		var mySwiper = new Swiper ('.swiper-container', {
			direction : 'horizontal',
			loop : true,
			slidesPerView : 1,
			observer : true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints : {
				320 : {
					slidesPerView : 1
				},
				768 : {
					slidesPerView : 2,
				},
				1200 : {
					slidesPerView : 3,
				}
			}
		})
	}

	/* Map */
	if($('#map')[0]) {
		ymaps.ready(init);
		function init(){
			var myMap = new ymaps.Map("map", {
				center: [55.802776, 37.583751],
				zoom: 17,
				controls: []
			});
			var myPlacemark = new ymaps.Placemark([55.802776, 37.583751], {iconCaption: 'Бутырская улица, 62'}, {
				iconColor: '#ff0000'
			});
			myMap.geoObjects.add(myPlacemark);

			if(window.matchMedia('(min-width:768px').matches){
				var position = myMap.getGlobalPixelCenter();
				myMap.setGlobalPixelCenter([position[0] + 200, position[1]]);
			}
			// var position = myMap.getGlobalPixelCenter();
			// myMap.setGlobalPixelCenter([position[0] + 150, position[1]]);
		}
	}

	/* Validate */
	$(".modal-window__form").validate ({
		rules : {
			name : {
				minlength : 2
			},
			tel : {
				digits : true,
				required : true,
				minlength : 10,
				maxlength : 11
			}
		},
		messages : {
			name : 'Введите ваше имя',
			tel : 'Введите ваш номер'
		}
	})

	$(".footer-info__form").validate ({
		rules : {
			email : {
				email: true
			}
		},
		messages : {
			email : 'Введите корректный адрес email'
		}
	})
});

/* Tabs */
$('.tabs__item').on('click',function(){
	var currTab = $(this).index();

	$('.tabs__item').removeClass('active-tab');
	$(this).addClass('active-tab');
})

/* Hamburger */
$('.menu-hamburger').on('click',function(){
	$('.hamburger-menu-wrap').toggle();
})

$('.hamburger-menu__close').on('click',function(){
	$('.hamburger-menu-wrap').hide();
})

/* Modal-window */
$('.call-order__link, .help__btn, .communication-block__btn').on('click',function(e){
	e.preventDefault();
	$('.modal-window').addClass('d-flex');
	$('.hamburger-menu-wrap').hide();
})

$('.modal-window__close').on('click',function(){
	$('.modal-window').removeClass('d-flex');
})

/* Fixed navigation */
$(window).on('scroll resize', function(){
	var pixelTop = $(window).scrollTop();
	
	if(pixelTop > 0 && $(document).width() > 991) {
		$('.navigation').addClass('active');
	}else if(pixelTop < 1){
		$('.navigation').removeClass('active');
	}
})

/* Smooth movement */
$(function (movement) {
	$(".go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
})