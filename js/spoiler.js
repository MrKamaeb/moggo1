$(document).ready(function () {
	$('.service-block__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});