// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}



export function menu() {
    // Menu

    const navBtn = document.querySelector(".nav-icon-btn");
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector(".header__top"); // menu bar (.header__top or .header__body)
    const nav__list = document.querySelector(".nav__list"); // list with links

    navBtn.onclick = function () {
        navIcon.classList.toggle("nav-icon--active");
        nav.classList.toggle("header__top--mobile"); // class for mobile adaptation
        document.body.classList.toggle("no-scroll"); // base style
    };

    nav__list.onclick = function () {
        navIcon.classList.remove("nav-icon--active");
        nav.classList.remove("header__top--mobile"); // mobile version
        document.body.classList.remove("no-scroll");
    };
}