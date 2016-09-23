$(function () {
	$(window).on('load resize', function () {
		$('.fill-screen').css('height', window.innerHeight);
	});

	// add Bootstrap's scrollspy
	$('body').scrollspy({
		target: '.navbar',
		offset: 160
	});

	// smmooth scrolling
	$('nav a, .down-button a').bind('click', function () {
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 1500, 'easeInOutExpo');

		event.preventDefault();
	});

	// Parallax scrolling with stellar.js
	//$(window).stellar();

	// Parallax scrolling with Parallax.js
	$('.parallaxImage').parallax({
		imageSrc: '../images/lake.jpg',
		speed: 0.5
	});

	// Initialize WOW setting
	var wow = new WOW();
	wow.init();
});