$('.history').css('display', 'none');
$('.french').css('display', 'none');

function overView(){
	$('.history').css('display', 'none');
	$('.rowofshit').css('display', 'none');
	$('.rowofshit').css('display', 'block');
	$('.rowofshit').hide().fadeIn()
	return;
};

function history(){
	$('.rowofshit').css('display', 'none');
	$('.history').css('display', 'none');
	$('.history').css('display', 'block');
	$('.history').hide().fadeIn()
	return;
};

function english(){
	$('.french').css('display', 'none');
	$('.english').css('display', 'none');
	$('.english').css('display', 'block');
	$('.english').hide().fadeIn()
	return;
};

function french(){
	$('.english').css('display', 'none');
	$('.french').css('display', 'none');
	$('.french').css('display', 'block');
	$('.french').hide().fadeIn()
	return;
};