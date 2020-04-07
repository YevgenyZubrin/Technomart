var deliveryButton = document.querySelector('.slider__link_delivery');
var warrantyButton = document.querySelector('.slider__link_warranty');
var creditButton = document.querySelector('.slider__link_credit');

var deliveryService = document.querySelector('.services__item_delivery');
var warrantyService = document.querySelector('.services__item_warranty');
var creditService = document.querySelector('.services__item_credit');

deliveryButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    deliveryButton.classList.add('slider__link_current');
    if (warrantyButton.classList.contains('slider__link_current')) 
        {
            warrantyButton.classList.remove('slider__link_current');
        }
    if (creditButton.classList.contains('slider__link_current')) 
        {
            creditButton.classList.remove('slider__link_current');
        }

        deliveryService.classList.add('services__item_current');
    if (warrantyService.classList.contains('services__item_current')) 
        {
            warrantyService.classList.remove('services__item_current');
        }
    if (creditService.classList.contains('services__item_current')) 
        {
            creditService.classList.remove('services__item_current');
        }
});

warrantyButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    warrantyButton.classList.add('slider__link_current');
    if (deliveryButton.classList.contains('slider__link_current')) 
        {
            deliveryButton.classList.remove('slider__link_current');
        }
    if (creditButton.classList.contains('slider__link_current')) 
        {
            creditButton.classList.remove('slider__link_current');
        }

        warrantyService.classList.add('services__item_current');
    if (deliveryService.classList.contains('services__item_current')) 
        {
            deliveryService.classList.remove('services__item_current');
        }
    if (creditService.classList.contains('services__item_current')) 
        {
            creditService.classList.remove('services__item_current');
        }
});

creditButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    creditButton.classList.add('slider__link_current');
    if (deliveryButton.classList.contains('slider__link_current')) 
        {
            deliveryButton.classList.remove('slider__link_current');
        }
    if (warrantyButton.classList.contains('slider__link_current')) 
        {
            warrantyButton.classList.remove('slider__link_current');
        }

        creditService.classList.add('services__item_current');
    if (deliveryService.classList.contains('services__item_current')) 
        {
            deliveryService.classList.remove('services__item_current');
        }
    if (warrantyService.classList.contains('services__item_current')) 
        {
            warrantyService.classList.remove('services__item_current');
        }
})