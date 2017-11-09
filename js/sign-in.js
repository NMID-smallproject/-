$('#sign-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-left').removeClass('clickClass');
})
$('#sign-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-right').removeClass('clickClass');
})