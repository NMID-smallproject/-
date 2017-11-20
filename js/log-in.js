$('#log-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#log-in-title-left').removeClass('clickClass');
	$('#underline-left').hide();
	$('#underline-right').show();
	// $("#log-a").attr("href","./manager-front.html");
})
$('#log-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#log-in-title-right').removeClass('clickClass');
	$('#underline-right').hide();
	// $('#underline-left').show();
	// $("#log-a").attr("href","./user-front.html"); 
})
$(function() {
	$('#log-in-title-left').trigger('click')
})

$(function getData() {
	$("#btn-signin").on("click",function () {
		var name = $("#name").val().trim(),
			password = $("#password").val().trim(),
			subpassword = $("#password-submit").val().trim();
			console.log("asd");
		if (name == "") {
			alert("用户名不能为空");
			return;
		}
		if (password == "") {
			alert("密码不能为空");
			return;
		}
		if (subpassword != password) {
			alert("两次密码不相符");
			return;
		}
		$.ajax({
			url: "http://47.95.205.220:8081/cquptqa/user/register",
			type: "POST",
			data: {
				userName: name,
				userPassword: password
			},
			success: function(data) {
				if (typeof data == 'string') {
					var data = JSON.parse(data); 
				}
				console.log(data);
				if (data.code == 200) {
					alert("注册成功，返回登录");
					window.location.href = '../pages/sign-in.html';
				} else if (data.code == 999) {
					comfirm("账号存在");
					return;
				} else {
					alert("未知错误");
					return;
				}
			}
		});
	})
});