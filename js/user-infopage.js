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

//编辑个人信息：
$(document).ready(function() {
	$(function() {
		$('#person-message').trigger('click')
	})
	$("#editor").on("click",function() {
		$("#jieshao").attr("contenteditable","true");
		$("#jieshao").css("color","grey");
		$("#sex").attr("contenteditable","true");
		$("#sex").css("color","grey");
		$("#xuehao").attr("contenteditable","true");
		$("#xuehao").css("color","grey");
		$("#person-email").attr("contenteditable","true");
		$("#person-email").css("color","grey");
		$("#person-tel").attr("contenteditable","true");
		$("#person-tel").css("color","grey");
		$("#buttons").append('<button id="setData">完成</button>');
	})
	//编辑个人信息
	$('#buttons').on('click','#setData',function() {
		var userinfo = $("#jieshao").html();
		var userGender = $("#sex").html();
		var userStudentNum = $("#xuehao").html();
		var userEmail = $("#person-email").html();
		var userPhone = $("#person-tel").html();
		if (userinfo==""||userGender==""||userStudentNum==""||userEmail==""||userPhone=="") {
			alert("信息不能为空");
			return false;
		} 
		if(userEmail!="") {
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		    isok= reg.test(userEmail);
		    if (!isok) {
		    alert("邮箱格式不正确，请重新输入！");
		    return false;
		}
	}
		if(userGender!="男"&&userGender!="女") {
			alert("性别格式错误，请输入‘男’或‘女’");
			return false;
		}
		if(userStudentNum.length !=10||isNaN(userStudentNum)) {
			alert("学号应为10位纯数字，请重新输入");
			return false;
		}
	    if(userPhone.length !=11||isNaN(userPhone)) {
			alert("手机号码长度应为11位纯数字，请重新输入");
			return false;
		}
//
		$.ajax({
			url:"http://47.95.205.220:8081/cquptqa/user/changeInfo",
			type:"POST",
			data: {
				userId:"0fce0455-b715-4c1d-b79b-ad4beeecf1c4",
				userinfo:userinfo,
				userGender:userGender,
				userStudentNum:userStudentNum,
				userEmail:userEmail,
				userPhone:userPhone
			},
			success:function(data) {
				if (typeof data =='string') {
		          var data = JSON.parse(data);
		        }
		        console.log(data);
		        if(data.code == 200) {
		        	console.log("编辑成功");
		        	return;
		        } else {
		        	console.log("编辑失败");
		        	return;
		        }

			}
		});
		 $("#buttons").children('#setData').remove();
	});
	//显示关注的问题
	$('#person-guanzhu-question').click(function(){
		
		$.ajax({
			url:"http://47.95.205.220:8081/cquptqa/user/showLikeQuestions",
			type:"POST",
			data: {
				userId:"586376ed-cfa8-4c4e-89e0-2d3655f83ad4"
			},
			
			success:function(data) {
				if (typeof data =='string') {
		          var data = JSON.parse(data);
				}
				var hh =''
				for (var i = 0; i < body.length; i++) {
					hh += '<div>body[i].bquestion_id</div>'+'<div>bquestion_text</div>'
				}
				$("#message-detail").html(hh);
			}
		});
	})



})	

