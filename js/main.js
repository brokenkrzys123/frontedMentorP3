const hamBtn = document.querySelector(".ham-btn");
const mobileNav = document.querySelector(".nav__mobile");
const hamOpen = document.querySelector(".ham-open");
const hamClose = document.querySelector(".ham-close");

hamBtn.addEventListener("click", function () {
	mobileNav.classList.toggle("active");
	hamOpen.classList.toggle("active");
	hamClose.classList.toggle("active");
});
