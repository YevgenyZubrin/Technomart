var buttonMap = document.querySelector('.contacts__map');
var buttonClose = document.querySelector('.map__close-button');

var modalMap = document.querySelector('.modal__map');
var overlayShow = document.querySelector('.overlay');

buttonMap.addEventListener("click", function(evt) {
    evt.preventDefault();

    console.log("loh")

    modalMap.classList.add('map-show');
    overlayShow.classList.add('overlay-show');
});

buttonClose.addEventListener("click", function(evt) {
    evt.preventDefault();

    modalMap.classList.remove('map-show');
    overlayShow.classList.remove('overlay-show');
});

overlayShow.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (modalMap.classList.contains('map-show') && overlayShow.classList.contains('overlay-show'))
    {
        modalMap.classList.remove('map-show');
        overlayShow.classList.remove('overlay-show');
    }
})

window.addEventListener('keydown', function(evt) {

    if (evt.keyCode === 27) {
    evt.preventDefault();

        if ( modalMap.classList.contains('map-show')) {
            modalMap.classList.remove('map-show');
            overlayShow.classList.remove('overlay-show');
        }
    }
})