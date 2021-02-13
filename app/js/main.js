$('.next img').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

$('.prev img').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




var yourEl = document.querySelectorAll(".header__bottom-menu ul li ul");
yourEl.forEach(aloneEl => {
	const yourBtn = document.createElement('button');
	aloneEl.parentNode.insertBefore(yourBtn,aloneEl);
})

$(".header__bottom-menu .sub > button ").click(function (e) {
	e.preventDefault();
	var menu = $(this).closest('.header__bottom-menu-base');
	if (false == $(this).next().is(':visible')) {
		menu.find('li').removeClass('slide active');
		menu.find('ul').slideUp();
	}
	$(this).next().slideToggle();
	$(this).parent().toggleClass('slide');
});



new SimpleBar(document.getElementById('header__bottom-menu-base'), {
	autoHide: false,
	scrollbarMaxSize: 110,
});
new SimpleBar(document.getElementById('header__bottom-menu-second'), {
		autoHide: false,
		scrollbarMaxSize: 110,
});


$('.header__burger').on('click', function(event) {
	event.preventDefault();
	$('.header__nav__menu').addClass("active");
	$('.header__burger').addClass("active");
	$('.header__close').addClass("active");
	$('.header__menu').addClass("active");
	$('.header__social').addClass("active");
});
$('.header__close').on('click', function(event) {
	event.preventDefault();
	$('.header__nav__menu').removeClass("active");
	$('.header__burger').removeClass("active");
	$('.header__close').removeClass("active");
	$('.header__menu').removeClass("active");
	$('.header__social').removeClass("active");
});

$('.success__modal').on('click', function(event) {
	event.preventDefault();
	$('.success__modal').removeClass("active");
});

$('.petition__button').on('click', function(event) {
	event.preventDefault();
	$('.petition__modal').addClass("active");
});
$('.petition__modal__close').on('click', function(event) {
	event.preventDefault();
	$('.petition__modal').removeClass("active");
});

$('.sub__button').on('click', function(event) {
	event.preventDefault();
	$('.sub__modal').addClass("active");
});
$('.sub__modal__close').on('click', function(event) {
	event.preventDefault();
	$('.sub__modal').removeClass("active");
});

$('.way').on('click', function(event) {
	event.preventDefault();
	$('.place__modal').addClass("active");
});
$('.feedback-btn').on('click', function(event) {
	event.preventDefault();
	$('.place__modal').addClass("active");
});
$('.place__modal__close').on('click', function(event) {
	event.preventDefault();
	$('.place__modal').removeClass("active");
});

$('.place__modal-btn').on('click', function(event) {
	event.preventDefault();
	$('.place__modal').removeClass("active");
	$('.place__modal__wait').addClass("active");
});
$('.place__modal__wait').on('click', function(event) {
	event.preventDefault();
	$('.place__modal__wait').removeClass("active");
});

$('.connect__way').on('click', function(event) {
	event.preventDefault();
	$('.connect__modal').addClass("active");
});

$('.connect__modal__close').on('click', function(event) {
	event.preventDefault();
	$('.connect__modal').removeClass("active");
});

$('.group__liders__item__all').on('click', function(event) {
	event.preventDefault();
	$('.group__liders__items').addClass("active");
	$('.group__liders__item__all').addClass("active");
});


$(function() {
	var tab = $('.mission__inner .mission__desc > p'); 
	tab.hide().filter(':first').show(); 
	$('.mission__inner .mission__tabs a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.mission__inner .mission__tabs a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function(){
		$('.mission__inner .mission__tabs a[href=' + $(this).data('id')+ ']').click();
	});
});

$(function() {
	var tab = $('.belief__inner .belief__desc > .belief__desc__item'); 
	tab.hide().filter(':first').show(); 
	$('.belief__inner .belief__tabs a').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.belief__inner .belief__tabs a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function(){
		$('.belief__inner .belief__tabs a[href=' + $(this).data('id')+ ']').click();
	});
});


function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar";
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  var inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);        
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
}

$('body').css({ 
  'width':'calc(100vw - ' + getScrollbarWidth() + 'px)' 
});
var button = document.querySelector('.header__burger');
button.addEventListener('click', function (){  
	if ($('.header__menu').hasClass("active")) {
		$('.header__menu').css({
			'right':  getScrollbarWidth() + 'px' 
		});
	}
});

button.addEventListener('click', function (){  
	if ($('.header__nav__menu').hasClass("active")) {
		$('.header__nav__menu').css({
			'left': - getScrollbarWidth() + 'px' 
		});
	}
});

button.addEventListener('click', function (){  
	$('body').css({
		'width': 100 + 'vw'  
	});
});

var button = document.querySelector('.header__close');
button.addEventListener('click', function (){  
		$('.header__menu').css({
			'right':  0 
		});
});

button.addEventListener('click', function (){  
		$('.header__nav__menu').css({
			'left': -100 + '%'
		});
});

button.addEventListener('click', function (){  
		$('body').css({
			'width':'calc(100vw - ' + getScrollbarWidth() + 'px)'
		});
});


function initModal(className) {
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const openModalButton = document.querySelector('.open-modal')
const closeModalButton = document.querySelector('.modal__close')
function existVerticalScroll() {
   return document.body.offsetHeight > window.innerHeight
}
function getBodyScrollTop() {
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
  }
openModalButton.addEventListener('click', e => {
  e.preventDefault()
  body.dataset.scrollY = getBodyScrollTop()
  modal.classList.add('modal--open')
  if(existVerticalScroll()) {
     body.classList.add('body-lock')
     body.style.top = `-${body.dataset.scrollY}px`
   }
})
closeModalButton.addEventListener('click', e => {
  e.preventDefault()
  modal.classList.remove('modal--open')
  if(existVerticalScroll()) {
   body.classList.remove('body-lock')
   window.scrollTo(0,body.dataset.scrollY)    
  }
})
}
initModal('.header__nav__menu')



$('.slider').slick({
	dots: false,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: false,
	swipe: false,
	speed: 0,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
});

$(".petition__modal form").submit(function(event) { //Change
	event.preventDefault();
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize(),
	}).done(function() {
		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
		$('.petition__modal').removeClass("active");
		$('.success__modal').addClass("active");
	});
	
	return true;
});

$(".sub__modal form").submit(function(event) { //Change
	event.preventDefault();
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize(),
	}).done(function() {
		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
		$('.sub__modal').removeClass("active");
		$('.success__modal').addClass("active");
	});
	
	return true;
});

$(".contact__feedback__form form").submit(function(event) { //Change
	event.preventDefault();
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize(),
	}).done(function() {
		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
		$('.place__modal').addClass("active");
	});
	
	return true;
});

$(".connect__modal form").submit(function(event) { //Change
	event.preventDefault();
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize(),
	}).done(function() {
		setTimeout(function() {
			th.trigger("reset");
		}, 1000);
		$('.connect__modal').removeClass("active");
		$('.success__modal').addClass("active");
	});
	
	return true;
});



var map;
function good() {
	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 59.940545, lng: 30.319096},
		zoom: 11,
		disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
			{
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": -5
					}
				]
			},
			{
				"elementType": "labels.text",
				"stylers": [
					{
						"weight": 1
					}
				]
			},
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#616161"
					}
				]
			},
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#f5f5f5"
					}
				]
			},
			{
				"featureType": "administrative.neighborhood",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#d4d4d4"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#977878"
					}
				]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#c5c4c4"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#bdbdbd"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#dedede"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#d9d3d3"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#9d9b9b"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#afacac"
					},
					{
						"weight": 0.5
					}
				]
			},
			{
				"featureType": "transit.line",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#e5e1e1"
					},
					{
						"lightness": 10
					}
				]
			},
			{
				"featureType": "transit.station.airport",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#bebbbb"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#b3b3b3"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9e9e9e"
					}
				]
			}
		]
	});

var marker = new google.maps.Marker({
	position: {lat: 59.960545, lng: 30.319096},
	map: map,
	title: 'ул. Мира 16, Санкт-Петербург'
});

}

$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 0; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});



