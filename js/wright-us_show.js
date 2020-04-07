var buttonContacts = document.querySelector('.contacts__button');
var buttonClose = document.querySelector('.wright-us__close-button');

var modalWrightUs = document.querySelector('.modal__wright-us');
var overlayShow = document.querySelector('.overlay');

var formWrightUs = document.querySelector('.wright-us__form');

buttonContacts.addEventListener("click", function(evt) {
    evt.preventDefault();

    modalWrightUs.classList.add('modal-show');
    overlayShow.classList.add('overlay-show');
});

buttonClose.addEventListener("click", function(evt) {
    evt.preventDefault();

    modalWrightUs.classList.remove('modal-show');
    overlayShow.classList.remove('overlay-show');
    modalWrightUs.classList.remove('error');
})

overlayShow.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (modalWrightUs.classList.contains('modal-show') && overlayShow.classList.contains('overlay-show'))
    {
        modalWrightUs.classList.remove('modal-show');
        overlayShow.classList.remove('overlay-show');
        modalWrightUs.classList.remove('error');
    }
})

window.addEventListener('keydown', function(evt) {

    if (evt.keyCode === 27) {
        evt.preventDefault();

            if (modalWrightUs.classList.contains('modal-show'))
        {
            modalWrightUs.classList.remove('modal-show');
            overlayShow.classList.remove('overlay-show');
            modalWrightUs.classList.remove('error');
        }
    }
})



