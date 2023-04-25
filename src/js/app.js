//app.js file
const menuSide = document.querySelector('.menu');
const menuBurger = document.querySelector('.menu__icon-burger');
const navMenu = document.querySelector('.nav');
const closeBurgerMenu = document.querySelector('.menu__icon-close');

menuBurger.addEventListener("click", function () {
	menuSide.classList.add('open');
	navMenu.classList.remove('hidden');
	menuBurger.classList.add("hidden");
	closeBurgerMenu.classList.remove('hidden')
})

closeBurgerMenu.addEventListener('click', function () {
	menuSide.classList.remove('open');
	navMenu.classList.add('hidden');
	menuBurger.classList.remove("hidden")
	closeBurgerMenu.classList.add('hidden')
})