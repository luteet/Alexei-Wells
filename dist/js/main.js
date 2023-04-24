
const 
	body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	burger = document.querySelector('.header__burger'),
	header = document.querySelector('.header');

const getDeviceType = () => {
	const ua = navigator.userAgent;
	if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
		return "tablet";
	}
	if (
		/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
		ua
		)
	) {
		return "mobile";
	}
	return "desktop";
};

const imageBody = document.querySelectorAll('.image-body, figure');
imageBody.forEach(imageBody => {
	const img = imageBody.querySelector('img'), style = getComputedStyle(imageBody);
	if(img) {
		if(img.getAttribute('width') && img.getAttribute('height') && style.position == "relative")
		imageBody.style.paddingTop = Number(img.getAttribute('height')) / Number(img.getAttribute('width')) * 100 + '%';
	}
	
})

// =-=-=-=-=-=-=-=-=-=- <click events> -=-=-=-=-=-=-=-=-=-=-

body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

	if ($('.header__burger')) {
		menu.forEach(element => {
			element.classList.toggle('_mob-menu-active')
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-

	
	// =-=-=-=-=-=-=-=-=-=-=-=- <scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=
	
	let btnToScroll = $('.btn-to-scroll, a[href*="#"]');
	if(btnToScroll) {
		event.preventDefault();
		let section;
	
		if(btnToScroll.getAttribute('href')) {
			if(btnToScroll.getAttribute('href').length > 1) {
				section = document.querySelector(btnToScroll.getAttribute('href'))
			} else {
				section = 0;
			}
			
		} else {
			section = 0;
		}
		
	
		menu.forEach(elem => {
			elem.classList.remove('_active')
		})

		if(section) {
			section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		} else {
			if(btnToScroll.classList.contains('_to-down')) {
				const btnScrollParent = btnToScroll.closest('section');
				window.scrollTo({
					left: 0,
					top: btnScrollParent.offsetTop + btnScrollParent.offsetHeight + (btnToScroll.offsetHeight * 2),
					behavior: "smooth"
				})
			} else {
				body.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
			}
			
		}
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </scroll on click to section> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <header-nav-list-link> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const headerNavListLink = $(".header__nav--list > li > a")
	if(headerNavListLink) {
	
		if(getDeviceType() != "desktop" && headerNavListLink.parentElement.querySelector('ul')) {
			if(!headerNavListLink.classList.contains('active')) {
				event.preventDefault();
			}

			headerNavListLink.classList.toggle('active');
		}
	
	} else if(document.querySelector('.header__nav--list > li > a.active')) {
		const headerNavListActiveLink = document.querySelectorAll('.header__nav--list > li > a.active');
		headerNavListActiveLink.forEach(link => {
			link.classList.remove('active');
		})
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </header-nav-list-link> -=-=-=-=-=-=-=-=-=-=-=-=



	// =-=-=-=-=-=-=-=-=-=-=-=- <click> -=-=-=-=-=-=-=-=-=-=-=-=
	
	const moreBtn = $(".more-btn");
	if(moreBtn) {
	
		const moreContent = moreBtn.closest('.more-content');
		moreContent.classList.add('_visible')
	
	}
	
	// =-=-=-=-=-=-=-=-=-=-=-=- </click> -=-=-=-=-=-=-=-=-=-=-=-=

})

// =-=-=-=-=-=-=-=-=-=- </click events> -=-=-=-=-=-=-=-=-=-=-





// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=


let sliderIndexHeroBgSlider = new Swiper('.index-hero__bg-slider', {

	spaceBetween: 0,
	slidesPerView: 1,

	loop: true,
	speed: 500,

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},

	

});

let indexHeroSlider = new Swiper('.index-hero__slider', {

	spaceBetween: 0,
	slidesPerView: 1,

	loop: true,
	speed: 500,

	navigation: {
		nextEl: '.index-hero__nav .swiper-button-next',
		prevEl: '.index-hero__nav .swiper-button-prev',
	},

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},

	thumbs: {
		swiper: sliderIndexHeroBgSlider,
	}
});

const albumSlides 		 = document.querySelectorAll('.album-slider__slide'),
	  albumSliderElement = document.querySelectorAll('.album-slider__wrapper');

let cloneAlbumSlides = [];

if(albumSlides.length == 1) {
	for(let index = 0; index <= 3; index++) {
		cloneAlbumSlides.push(albumSlides[0].cloneNode(true, true));
	}
} else if(albumSlides.length == 2) {
	albumSlides.forEach(albumSlide => {
		cloneAlbumSlides.push(albumSlide.cloneNode(true, true));
	})
	albumSlides.forEach(albumSlide => {
		cloneAlbumSlides.push(albumSlide.cloneNode(true, true));
	})
} else {
	albumSlides.forEach(albumSlide => {
		cloneAlbumSlides.push(albumSlide.cloneNode(true, true));
	})
}


albumSliderElement.forEach(albumSliderElement => {
	Array.from(cloneAlbumSlides).forEach(slide => {
		albumSliderElement.append(slide);
	})	
})



let albumSlider = new Swiper('.album-slider', {

	spaceBetween: 10,
	slidesPerView: 1,
	centeredSlides: true,

	loop: true,
	loopedSlides: 2,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		992: {
			spaceBetween: 30,
		},
	}

});


let kindWordsSliderNav = new Swiper('.kind-words__slider-nav', {

	spaceBetween: 50,
	slidesPerView: "auto",
	freeMode: true,

	breakpoints: {
		992: {
			spaceBetween: 70,
		},
	}

});


let kindWordsSlider = new Swiper('.kind-words__slider', {

	spaceBetween: 0,
	slidesPerView: 1,

	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},

	thumbs: {
		swiper: kindWordsSliderNav,
	}

});


// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=



// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

const gridBlock = document.querySelector('.grid');
let masonary;


let resizeCheck = {}, windowSize, widthScreen = window.innerWidth, resizeFirst = true;

//html.style.setProperty("--height-header", header.offsetHeight + "px");

function resizeCheckFunc(size, minWidth, maxWidth) {
	if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
		resizeCheck[String(size)] = false;
		maxWidth(); // < size
	}

	if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
		resizeCheck[String(size)] = true;
		minWidth(); // > size
	}
}

function resize() {

	if(widthScreen != window.innerWidth && resizeFirst) {
		resizeFirst = false;
		widthScreen = window.innerWidth;
		html.style.setProperty("--height-screen-min", window.innerHeight - header.offsetHeight + "px");
		
	}

	html.style.setProperty("--height-screen", window.innerHeight + "px")
	html.style.setProperty("--height-header", header.offsetHeight + "px")

	windowSize = window.innerWidth

	resizeCheckFunc(550,
	function () {  // screen > 

		if(gridBlock) {
			masonary = new Masonry( '.grid', {
				itemSelector: '.grid-item',
				transitionDuration: 0,
				gutter: 0
			});
		}

	},
	function () {  // screen < 

		if(gridBlock && masonary) {
			masonary.destroy();
		}

	});
	
}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=

var player = new MediaElementPlayer('player', {
	hideVolumeOnTouchDevices: false,
	/* pluginPath: "/path/to/shims/",
// When using `MediaElementPlayer`, an `instance` argument
// is available in the `success` callback
	success: function(mediaElement, originalNode, instance) {
		// do things
	} */
});
//console.log(player);
/* setInterval(() => {
	console.log(player.currentTime);
},3000) */

const elem = document.querySelector('.date-input');
const datepicker = new Datepicker(elem, {
  // ...options
}); 

/* 
// =-=-=-=-=-=-=-=-=-=-=-=- <animation> -=-=-=-=-=-=-=-=-=-=-=-=

AOS.init({
	disable: "mobile",
});

// =-=-=-=-=-=-=-=-=-=-=-=- </animation> -=-=-=-=-=-=-=-=-=-=-=-=

*/
