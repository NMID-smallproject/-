$('#sign-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-left').removeClass('clickClass');
	$('#underline-left').hide();
	$('#underline-right').show();
	$("#log-a").attr("href","./manager-front.html");
})
$('#sign-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-right').removeClass('clickClass');
	$('#underline-right').hide();
	$('#underline-left').show();
	$("#log-a").attr("href","./user-front.html"); 
})
$(function() {
	$('#sign-in-title-left').trigger('click')
})