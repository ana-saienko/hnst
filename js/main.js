const swiper = new Swiper('.swiper-container', {
	loop: true,
	grabCursor: true,
	speed: 400,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 });
 
 $(function () {
	$(document).scroll(function () {
	  var $nav = $(".sticky");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
 });

 $("a.scroll-to").on("click", function(e){
	e.preventDefault();
	var anchor = $(this).attr('href');
	$('html, body').stop().animate({
		 scrollTop: $(anchor).offset().top - 100
	}, 800);
});

// Скрипт бургера

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});