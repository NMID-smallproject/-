$('#log-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#log-in-title-left').removeClass('clickClass');
	$('#underline-left').hide();
	$('#underline-right').show();
	$("#log-a").attr("href","./manager-front.html");
})
$('#log-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#log-in-title-right').removeClass('clickClass');
	$('#underline-right').hide();
	$('#underline-left').show();
	$("#log-a").attr("href","./user-front.html"); 
})
$(function() {
	$('#log-in-title-left').trigger('click')
})