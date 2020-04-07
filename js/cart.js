var modalCart = document.querySelector('.main-modal__cart');

var modalOpen = document.querySelectorAll('.product-action__button_buy');
var modalClose = document.querySelector('.modal-cart__button_close');

var overlay = document.querySelector('.overlay');

var buyContinue = document.querySelector('.modal-cart__buy-link');

for(var i = 0; i < modalOpen.length; i++) {
    modalOpen[i].onclick = function(evt) {
        evt.preventDefault();

        modalCart.classList.add('modal-show');
        overlay.classList.add('overlay-show');
    }
}

modalClose.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalCart.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');

});

buyContinue.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalCart.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');

});

overlay.addEventListener('click', function(evt) {
    evt.preventDefault();

    modalCart.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');

});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        modalCart.classList.remove('modal-show');
        overlay.classList.remove('overlay-show');
    }
})