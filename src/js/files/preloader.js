window.onload = function () {
	let preloader = document.querySelector('.preloader');
	preloader.classList.add('hide-preloader');
	setTimeout(function () {
		preloader.classList.add('preloader-hidden')
	}, 950);
}