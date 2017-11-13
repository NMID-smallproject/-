$('#person-answer').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})
$('#person-question').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})
$('#person-guanzhu-user').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})
$('#person-fan').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})
$('#person-guanzhu-question').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})
$('#person-message').click(function(){
	$(this).addClass('clickClass');
	 $(this).siblings().removeClass('clickClass');  
})

$(function() {
	$('#person-message').trigger('click')
})
