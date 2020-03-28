var common = {
	init: function() {
		common.fixNavigation();
		common.main();
		common.sidebar();
		common.tabs();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
			$('body').toggleClass('open');
			$('.left-sidebar').toggleClass('open');
		})
		$('.show-more').click(function(event){
			event.preventDefault();
			$(this).closest('.show-more-wrap').addClass('open');
		})


		$( ".datepicker" ).datepicker();

		$('.left-sidebar > ul > li > .left-sidebar-link').click(function(event){
			event.preventDefault();
			if($(this).closest('li').hasClass('open') == false) {
				$('.left-sidebar > ul > li').removeClass('open');
				$('.left-sidebar > ul > li .sidebar-menu-hidden').removeClass('open');
				$(this).closest('li').addClass('open');
				$(this).closest('li').find('.sidebar-menu-hidden').addClass('open');
			}else {
				$('.left-sidebar > ul > li').removeClass('open');
				$('.left-sidebar > ul > li .sidebar-menu-hidden').removeClass('open');
			}
		})
		$('.sidebar-menu-hidden > li > .sidebar-menu-hidden-link').click(function(event){
			event.preventDefault();
			if($(this).closest('li').hasClass('open') == false) {
				$('.sidebar-menu-hidden > li').removeClass('open');
				$('.sidebar-menu-hidden > li .menu-hidden-second').removeClass('open');
				$(this).closest('li').addClass('open');
				$(this).closest('li').find('.menu-hidden-second').addClass('open');
			}else {
				$('.sidebar-menu-hidden > li').removeClass('open');
				$('.sidebar-menu-hidden > li .menu-hidden-second').removeClass('open');
			}
		})




		$('.lang-active, .profile-name, .apartament-book-active').click(function(event){
			event.preventDefault();
			$(this).closest('.link-trigger').toggleClass('open');
		})

		$('.btn-submit').click(function(event){
			event.preventDefault();
			var formItem = $(this).closest('form').find('.form-item')
			// $( formItem ).each(function() {
			// 	var item = $(this);
			// 	if(item.val() == '') {
			// 		item.addClass('error')
			// 		setTimeout(function(){
			// 			item.removeClass('error')
			// 		}, 4000)
			// 	}
			// });
			if($(this).hasClass('.change-pass-info')){
				if(formItem.val() != '') {
					$('.popup-wrapper').removeClass('active');
					$('#changePassInfoPopup').addClass('active')
				}
			}else {
				if(formItem.val() != '') {
					$('#thanksPopup').addClass('active')
				}
			}
		});

		$('.btn-exercise').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('#exercisePopup').addClass('active')
		})
		$('.star-item, .header-star').click(function(event){
			$(this).toggleClass('active');
		})

		$('.delete-compare-item').click(function(event){
			$(this).closest('.compare-list-item').remove();
		});
		$('.delete-card-item').click(function(event){
			$(this).closest('tr').remove();
		});
		$('.cabinet-favorite .star-item').click(function(event){
			$(this).closest('.section-sell-item').remove();
		})

		$('.login-trigger').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('#loginPopup').addClass('active')
		})
		$('.change-password-trigger').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
			$('#changePassPopup').addClass('active')
		})

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		})
		
		$('.change-pass-btn').click(function(event){
			event.preventDefault();
			$(this).closest('.change-pass').addClass('active');
			$(this).closest('form').find('.form-item').removeAttr("disabled");
		})
		$('.save-pass-btn').click(function(event){
			event.preventDefault();
			$(this).closest('.change-pass').removeClass('active');
			$(this).closest('form').find('.form-item').attr("disabled", true);
		})

		$('.table-trigger').click(function(event){
			event.preventDefault();
			$(this).toggleClass('open');
			$(this).closest('.table-row').toggleClass('open');
		})
		$('.minus-item').click(function(event){
			event.preventDefault();
			var step =  $(this).closest('.card-quantity').find('.card-quantity-num').attr('data-step');
			var currentNum = $(this).closest('.card-quantity').find('.card-quantity-num').text();
			var minus = Number(currentNum) - Number(step);
			if((Number(currentNum) - Number(step)) !== 0) {
				$(this).closest('.card-quantity').find('.card-quantity-num').text(minus);
				$(this).closest('.card-quantity').find('.quantity-field').val(minus);
			}
		})
		$('.plus-item').click(function(event){
			event.preventDefault();
			var step =  $(this).closest('.card-quantity').find('.card-quantity-num').attr('data-step');
			var currentNum = $(this).closest('.card-quantity').find('.card-quantity-num').text();
			var sum = Number(currentNum) + Number(step);
			$(this).closest('.card-quantity').find('.card-quantity-num').text(sum);
			$(this).closest('.card-quantity').find('.quantity-field').val(sum);
		})

		$('.form-row input').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {$(this).closest('.form-row').addClass('active')}
		});

	

		
	},
	fixNavigation: function(){
		var headerHeight = $('header').outerHeight();
		function fixPanel() {
			if ($(window).scrollTop() > 0) {
				$('header.profile').addClass('fixed');
				$('body').css({'margin-top': headerHeight})
			}else {
				$('header.profile').removeClass('fixed')
				$('body').css({'margin-top':0})
			}
		};
		function fixPanelMob() {
			if ($(window).scrollTop() > headerHeight) {
				$('header.profile').addClass('fixed');
				$('body').css({'margin-top': headerHeight})
			}else {
				$('header.profile').removeClass('fixed')
				$('body').css({'margin-top':0})
			}
		};
		if($('header').hasClass('.profile') == true) {
			if($(window).width() < 1201 && $(window).width() > 767) {
				fixPanel();
			}else if($(window).width() < 768){
				fixPanelMob()
			}
		}


		$(window).scroll(function() {
			if($('header').hasClass('.profile') == true) {
				if($(window).width() < 1201 && $(window).width() > 767) {
					fixPanel();
				}else if($(window).width() < 768){
					fixPanelMob()
				}
			}
		});
	},
	tabs: function(){
		$('.tabs-block .tabs-btn').click(function(e){
			if($(this).hasClass('.active') == false) {
				var tabCnt = '.' + $(this).attr('data-cnt');
				$('.tabs-block .tabs-btn.active, .tabs-content-item').removeClass('active')
				$(tabCnt).addClass('active')
				$(this).addClass('active');
			}
		});
	},
	sidebar: function(){
		var headerHeight = $('header').outerHeight();
		var footerHeight = $('footer').outerHeight();
		$( window ).scroll(function() {
			var pos = $(window).scrollTop();
			if($(window).width() > 1200) {
				var docHeight = $(document).height();
				var footerPos = docHeight - pos - ($(window).height() - footerHeight );

				if(pos > headerHeight ){
					$(".news-list, .left-sidebar").addClass('active');
					$('.header').addClass('active');
				}else {
					$(".news-list, .left-sidebar").removeClass('active');
				}

				if(footerHeight * 2 > footerPos) {
					$(".left-sidebar").css("top", (0 - ((footerHeight * 2) - footerPos)));
					$(".news-list").css("top", (0 - ((footerHeight * 2) - footerPos)));
					$(".sidebar-menu-hidden, .menu-hidden-second").css("padding-top", (10 + ((footerHeight * 2) - footerPos)));
				}else {
					$(".left-sidebar").css("top", 0);
					$(".news-list").css("top", 0);
					$(".sidebar-menu-hidden, .menu-hidden-second").css("padding-top", 28);
				}

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
		var gallery = $('.apartament-gallery').owlCarousel({
			nav: true,
			dots: true,
			margin: 0,
			items: 1, 
			autoWidth: true,
			dotsContainer: '.apartament-gallery-dots',
			responsive:{
				0:{
					items:1,
					autoWidth: false,
				},
				768:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		var galleryDots = $('.apartament-gallery-dots').owlCarousel({
			nav: false,
			dots: false,
			margin: 24,
			items: 4, 
			responsive:{
				0:{
					items:1
				},
				600:{
					items:4
				},
				1551:{
					items:3
				},
				1681:{
					items:4
				}
			}
		});
		$('.apartament-gallery-dots .apartament-gallery-dots-img').click(function () {
			var thisItem = $(this).attr('data-index');
			setTimeout(function(){
				gallery.trigger('to.owl.carousel', [thisItem, 300]);
			}, 1)
		});

		$('.apartament-gallery .owl-next').click(function() {
			galleryDots.trigger('next.owl.carousel');
		})
		$('.apartament-gallery .owl-prev').click(function() {
			galleryDots.trigger('prev.owl.carousel', [300]);
		})
	}

};

(function() {
	common.init();
}());
