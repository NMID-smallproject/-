$('#sign-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-left').removeClass('clickClass');
	$('#underline-right').style.display="visible";
})
$('#sign-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-right').removeClass('clickClass');
	$('#underline-left').style.display="visible";
})
$(function() {
	$('#sign-in-title-left').trigger('click')
})