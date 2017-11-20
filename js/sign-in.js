$('#sign-in-title-right').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-left').removeClass('clickClass');
	$('#underline-left').hide();
	$('#underline-right').show();
	// $("#sign-a").attr("href","./manager-front.html");//以不同身份登录，登录的链接连到不同的首页 
})
$('#sign-in-title-left').click(function () {
	$(this).addClass('clickClass');
	$('#sign-in-title-right').removeClass('clickClass');
	$('#underline-right').hide();
	$('#underline-left').show();
	// $("#sign-a").attr("href","./user-front.html"); 
})
$(function() {
	$('#sign-in-title-left').trigger('click')
})


$(function getData() {
	$("#btn-signin").on("click",function () {
		var name = $("#name").val().trim(),
			password = $("#password").val().trim();
		// console.log("userGender");
		if (name == "") {
			alert("用户名不能为空");
			return;
		}
		if (password == "") {
			alert("密码不能为空");
			return;
		}
		$.ajax({
			url: "http://47.95.205.220:8081/cquptqa/user/login",
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
					alert("登陆成功");
					User.prototype._saveStorage(data.body.userName,data.body.userId);
					User.prototype._loadStorage("userId");
					window.location.href = '../pages/user-front.html';
				} else if (data.code == 999) {
					alert("账号存在");
					return;
				} else if (data.code == 1009){
					alert("密码错误");
					return;
				}
			}
		});
	})
});

