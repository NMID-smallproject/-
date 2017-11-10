$('#sign-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-left').removeClass('clickClass');
	$('#underline-left').hide();
	$('#underline-right').show();
	$("#sign-a").attr("href","./manager-front.html");//以不同身份登录，登录的链接连到不同的首页 
})
$('#sign-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-right').removeClass('clickClass');
	$('#underline-right').hide();
	$('#underline-left').show();
	$("#sign-a").attr("href","./user-front.html"); 
})
$(function() {
	$('#sign-in-title-left').trigger('click')
})
