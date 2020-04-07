var buttonBack = document.querySelector('.promo__button_back');
var buttonForward = document.querySelector('.promo__button_forward');

var buttonPagDrill = document.querySelector('.promo-paginator__button_drill');
var buttonPagPerf = document.querySelector('.promo-paginator__button_perforator');

var promoDrill = document.querySelector('.slider__container_drill');
var promoPerf = document.querySelector('.slider__container_perforator');

buttonPagDrill.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (promoPerf.classList.contains('slider__container_current')) 
    {
        promoPerf.classList.remove('slider__container_current');
        promoDrill.classList.add('slider__container_current');

        if (buttonPagPerf.classList.contains('promo-paginator__button_current'))
        {
            buttonPagPerf.classList.remove('promo-paginator__button_current');
            buttonPagDrill.classList.add('promo-paginator__button_current');
        }
    }
});

buttonPagPerf.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (promoDrill.classList.contains('slider__container_current')) {
        promoDrill.classList.remove('slider__container_current');
        promoPerf.classList.add('slider__container_current');
        if (buttonPagDrill.classList.contains('promo-paginator__button_current'))
        {
            buttonPagDrill.classList.remove('promo-paginator__button_current');
            buttonPagPerf.classList.add('promo-paginator__button_current');
        }
    } 
});


buttonBack.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (promoDrill.classList.contains('slider__container_current')) 
    {
        promoDrill.classList.remove('slider__container_current');
        promoPerf.classList.add('slider__container_current');

        if (buttonPagDrill.classList.contains('promo-paginator__button_current'))
        {
            buttonPagDrill.classList.remove('promo-paginator__button_current');
            buttonPagPerf.classList.add('promo-paginator__button_current');
        }
    } else  if (promoPerf.classList.contains('slider__container_current')) 
    {
        promoPerf.classList.remove('slider__container_current');
        promoDrill.classList.add('slider__container_current');

        if (buttonPagPerf.classList.contains('promo-paginator__button_current'))
        {
            buttonPagPerf.classList.remove('promo-paginator__button_current');
            buttonPagDrill.classList.add('promo-paginator__button_current');
        }
    }
});

buttonForward.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (promoDrill.classList.contains('slider__container_current')) {
        promoDrill.classList.remove('slider__container_current');
        promoPerf.classList.add('slider__container_current');
        if (buttonPagDrill.classList.contains('promo-paginator__button_current'))
        {
            buttonPagDrill.classList.remove('promo-paginator__button_current');
            buttonPagPerf.classList.add('promo-paginator__button_current');
        }
    } else if (promoPerf.classList.contains('slider__container_current')) {
        promoPerf.classList.remove('slider__container_current');
        promoDrill.classList.add('slider__container_current');

        if (buttonPagPerf.classList.contains('promo-paginator__button_current'))
        {
            buttonPagPerf.classList.remove('promo-paginator__button_current');
            buttonPagDrill.classList.add('promo-paginator__button_current');
        }
    }
});