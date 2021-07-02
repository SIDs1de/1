$(function () {
	if($(window).width() < 1200){
		/* Это для телефонов */
		var a = 1250;
	} else{
		/* Это для пк */
		var a = 750;
	}
	$(window).scroll(function() {
	    $('.h2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+ a) {
	            $(this).addClass("animate__fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.first-item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+ a) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.second-item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+ a) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.third-item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+ a) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+ a) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});

})