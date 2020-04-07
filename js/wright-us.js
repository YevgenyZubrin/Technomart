var formWrightUs = document.querySelector('.wright-us__form');
var modalWrightUs = document.querySelector('.modal__wright-us');

var inputName = document.querySelector("[name=name]");
var inputEmail = document.querySelector("[name=email]");
var inputText = document.querySelector("[name=text]");

var buttonSubmit = document.querySelector('.wright-us__button');

formWrightUs.addEventListener('submit', function(evt) {
    evt.preventDefault();

    if (!inputName || !inputEmail || inputText) {
        modalWrightUs.classList.add('error');
    }
})