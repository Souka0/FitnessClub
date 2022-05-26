
$(".navbar-toggler").on("click" , function(){
	if($(".dropdown-item").hasClass("active")){
		$(".dropdown-item").removeClass("active");
	}
	else{
			$(".dropdown-item").addClass("disabled");
	}
})

$(window).on('load', function() {
	var preloaderFadeOutTime = 500;
	function hidePreloader() {
		var preloader = $('.spinner-wrapper');
		setTimeout(function() {
			preloader.fadeOut(preloaderFadeOutTime);
		}, 500);
	}
	hidePreloader();
});

$(window).on('scroll load', function() {
	if ($(".navbar").offset().top > 20) {
		$(".fixed-top").addClass("top-nav-inscroll");
	} else {
		$(".fixed-top").removeClass("top-nav-inscroll");
	}
});

$(function() {
	$(document).on('click', 'a.page-scroll', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 600, 'easeInOutExpo');
		event.preventDefault();
	});
});

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',
	fixedContentPos: false, 
	fixedBgPos: true,
	overflowY: 'auto',
	closeBtnInside: true,
	preloader: false,
	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
});

var $grid = $('.grid').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
    
$('.filters-button-group').on( 'click', 'a', function() {
    var filterValue = $(this).attr('filter');
    $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });	
});

$("input, textarea").keyup(function(){
	if ($(this).val() != '') {
		$(this).addClass('notEmpty');
	} else {
		$(this).removeClass('notEmpty');
	}
});

$('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
var amountScrolled = 700;
$(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
        $('a.back-to-top').fadeIn('500');
    } else {
        $('a.back-to-top').fadeOut('500');
    }
});

$(".button, a, button").mouseup(function() {
	$(this).blur();
});

function validform(){
	alert ("Message est envaye")
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.target-burger').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('toggled');
    })
})

let popup = document.getElementById("popup");

    function ClosePop(){
        popup.classList.remove("open");
    }
