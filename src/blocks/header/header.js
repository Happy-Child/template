// -- Helpers BEGIN
const documentReady = require("%helpers%/document-ready.js");
const breakpoints = require("%helpers%/breakpoints.js");
// -- Helpers END

documentReady(function() {
	const $header = $(".header"),
		$menu = $header.find(".header__nav"),
		$menuBtn = $header.find(".header__btn"),
		$page = $("html, body");

	// -- Functions BEGIN
	const changeStateMenu = () => {
		$menuBtn.toggleClass("header__btn_active");
		$menu.toggleClass("header__nav_visible");
		$page.toggleClass("page-fixed");
	};

	const initMenuBtn = () => {
		$menuBtn.on("click", function () {
			changeStateMenu();
		});
	};
	// -- Functions END

	if ($menuBtn.length) initMenuBtn();
});
