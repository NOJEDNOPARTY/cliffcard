var common = {
	init: function() {
		common.main();
		common.sidebar();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
			$('.left-sidebar').toggleClass('open');
		})
		$('.show-more').click(function(event){
			event.preventDefault();
			$(this).closest('.show-more-wrap').addClass('open');
		})

		$('.lang-trigger').click(function(event){
			event.preventDefault();
			$(this).toggleClass('open');
		})

		$('input.btn[type="submit"').click(function(event){
			event.preventDefault();
			var formItem = $(this).closest('form').find('.form-item')
			$( formItem ).each(function( index ) {
				var item = $(this);
				if(item.val() == '') {
					item.addClass('error')
					setTimeout(function(){
						item.removeClass('error')
					}, 4000)
				}
			});
			if(formItem.val() != '') {
				$('#thanksPopup').addClass('active')
			}
		})

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		})
		
		
	},
	sidebar: function(){
		var headerHeight = $('header').outerHeight();
		var footerHeight = $('footer').outerHeight();
		$( window ).scroll(function() {
			var pos = $(window).scrollTop();
			var docHeight = $(document).height();
			var footerPos = docHeight - pos - ($(window).height() - footerHeight );
			if(pos > headerHeight ){
				$(".news-list, .left-sidebar").addClass('active');
			}else {
				$(".news-list, .left-sidebar").removeClass('active');
			}
			if(footerHeight * 2 > footerPos) {
				$(".left-sidebar").css("top", (0 - ((footerHeight * 2) - footerPos)));
				$(".news-list").css("top", (0 - ((footerHeight * 2) - footerPos)));
			}else {
				$(".left-sidebar").css("top", 0);
				$(".news-list").css("top", 0);
			}
		});
	},
	owl: function(){
		$('.banner-carousel').owlCarousel({
			nav: false,
			dots: true,
			loop: true,
			smartSpeed: 1000,
			autoHeight:true,
			margin: 0,
			items: 1, 
			autoplay: true,
			autoplayTimeout: 6000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
	}

};

(function() {
	common.init();
}());
