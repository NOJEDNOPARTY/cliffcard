var common = {
	init: function() {
		common.main();
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
