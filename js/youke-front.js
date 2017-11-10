$('#up').click(function () {
	var number = $(this).find('span').innerHTML;
	if(number==undefined) {
		$(this).find('span').innerHTML=1;
	}
	else {
		number++;
	}
})