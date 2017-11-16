$(function(){

$('#my-menu').mmenu({
	extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
	navbar: {
		title: 'Site Menu'
	},
	offCanvas: {
		position: 'right'
	}
	
});

var ap = $('#my-menu').data('mmenu');
ap.bind('open:start', function() {
	$('.hamburger').addClass('is-active');
}).bind('close:finish', function() {
	$('.hamburger').removeClass('is-active');
});

});
