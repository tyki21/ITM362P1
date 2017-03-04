

//Tell js to give up the $ sign
$.noConflict();

//jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

	$('html').removeClass('nojs');
    $('html').addClass('hasjs');

$('#email').on('keyup focus blur', function(){


var currval = $(this).val(); 
var valpatt = $(this).attr('pattern');
console.log(currval,valpatt);
if(currval.match(valpatt)) {
	$('#submit').addClass('active');
}


});