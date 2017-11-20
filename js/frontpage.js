//分页 折叠 点赞数 周一晚上之前弄完
var url = "http://47.95.205.220:8081/cquptqa/mainPage/goMainPage";
var listCount = 10;//每页显示条数
var page = 1;//当前页数
var pageCount;//总条数
var allCount;//总页数

var allarr = [];
function loadAtr($,page) {
	$.ajax({
		url: url,
		type: "POST",
		data: {
			nowPage: page,
			listCount: listCount
		},
		success: function(data) {
			if (typeof data == 'string') {
				var data = JSON.parse(data); 
			}
			var list = data.body.pageList;
			render(list);
		}
	})
}
// loadAtr($);
function render(datalist) {
	$.each(datalist,function(i){
		var $div = $("<div/>");
		$(".content").append($div);
		$div.addClass("single-content").html("<div class="+"authorinfo"+"><span><a><img src="+"../images/头像.png"+" id="+"photo"+"></a></span><span id="+"user-id"+"><a href="+"./other-user-infopage.html"+">"+datalist[i].user_name+"</a></span><sapn style="+"display:none"+">"+datalist[i].user_id+"</span></div><a href="+"../pages/single-question-user?userId="+datalist[i].user_id+" class="+"content-answer"+">"+datalist[i].question_text+"</a><div class="+"actions"+"><button id="+"up"+"><span class="+"up-number"+">"+datalist[i].question_replies+"条评论"+"</span></button><button id="+"down"+"><span class="+"up-number"+">"+datalist[i].question_tag+"</span></button></div><div class="+"time"+">"+datalist[i].question_creatime+"</div>");
	});
}

$("#search-submit").on("click",function() {
	var text = $("#search").val();
	$.ajax({
		url: "http://47.95.205.220:8081/cquptqa/user/searchQuestion",
		type: "POST",
		data: {
			text: text
		},
		success: function(result) {
			if (typeof result == 'string') {
				var result = JSON.parse(result); 
			}
			console.log(result);
			if (result.code == 200) {
   				$(".content").empty();
				render(result.body);
			}
		}
	})
});

var ul = document.getElementById('ul');
var li = ul.getElementsByTagName('li');
var type = document.getElementById('type');
var btn = document.getElementById('btn');
li[2].className = 'background';
var num1 = 1;
var num2 = 10;


loadAtr($,page);

//给表示页数的三个li写上页数
content(num1);
function content(number){
    for(var i=0 ; i<li.length-4 ; i++){
        li[i+2].innerHTML = number;
        number++;
    }
}

//把所有的分页背景去掉，给指定的分页添加背景颜色
function Background(num){
    for(var i = 0;i<li.length;i++){
       	li[i].className = li[i].className.replace('background','');
        li[num].className = 'background';
    }
} 
//首页的点击事件
li[0].onclick = function(){
    Background(2);
    num1 = 1;
    content(num1);
    $(".content").empty();
    loadAtr($,1);
}
//尾页的点击事件
li[li.length-1].onclick = function(){
    Background(li.length-3);
    num1 = num2-(li.length-5);
    content(num1);
    $(".content").empty();
    loadAtr($,(li.length-1));
}
//上一页的点击事件
li[li.length-(li.length-1)].onclick = function(){

    for(var j = 0;j<li.length-4;j++){
        if(li[j+2].className == 'background' && li[j+2].innerHTML != 1){
            if(j+2 != li.length-(li.length-2)){
                Background(j+1);
			    $(".content").empty();
                loadAtr($,li[j+1].innerHTML);
            }
            break;
        }
    }
    if(j+2 == li.length-(li.length-2)){
        num1 -- ;
        content(num1);
	    $(".content").empty();
        loadAtr($,li[j+2].innerHTML);
    }
}
//下一页的点击事件
li[li.length-2].onclick = function(){
    for(var j = 0;j<li.length;j++){
        if(li[j].className == 'background' && li[j].innerHTML < num2){  //* && 写最后一页的总数*/
            if(j+1 < li.length-2){
                Background(j+1);
    			$(".content").empty();
                loadAtr($,li[j+1].innerHTML);
            }
            break;
        }
    }
    if(j+1 == li.length-2){
        num1++;
        content(num1);
  		$(".content").empty();
        loadAtr($,li[j].innerHTML);
    }
}        
//分页的点击事件
for(var i = 0;i<li.length-4;i++){
    li[i+2].index = i+2;
    li[i+2].onclick = function(){
        Background(this.index);
   		$(".content").empty();
        loadAtr($,this.index);
    }
}
//跳转事件       
btn.onclick = function(){

	if(type.value>2&&type.value<num2-1){
		Background(2);
		content(type.value);
    	$(".content").empty();		
        loadAtr($,type.value);
	}

	else if(type.value == 1){
		Background(2);
	    $(".content").empty();		
        loadAtr($,1);
		content(1);
	}

	else if(type.value == 2){
		Background(3);
	    $(".content").empty();
        loadAtr($,2);
		content(2);
	}

	else if(type.value == num2){
		Background(4);
	    $(".content").empty();
        loadAtr($,num2-1);
		content(num2-2);
	}

	else if(type.value == num2 - 1){
		Background(3);
	    $(".content").empty();
        loadAtr($,num2-2);
		content(num2-2);
	}
}
$("#sign-in a").text(User.prototype._loadStorage("userName"));

//点击各标签显示相应数据
$(".tag span").click = function() {
	var tag = $(this).text();
	console.log(tag);
	$.ajax({
			url:"http://47.95.205.220:8081/cquptqa/user/checkQuestionByTag",
			type:"POST",
			data: {
				tag: tag,
				nowpage: 1,
				listCount: 3
			},
			
			success:function(data) {
				if (typeof data =='string') {
		          var data = JSON.parse(data);
				}

				render(data.body.pageList);
			}
		});
}

var contentUrl = User.prototype._loadStorage("userId");
// $(".content-answer").attr("herf","../pages/single-question-user?userId=contentUrl");
