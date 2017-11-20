$(function getQuestion() {
	$("#submit").on("click",function() {
    var question = $(".view").val();
    var tag = $("select").find("option:selected").val().trim();
    //无法通过session获取userId值
    $.ajax({
      url:"http://47.95.205.220:8081/cquptqa/user/saveQuestion",
      type:"POST",
      data: {
        userId: "0484a404-28d0-48ab-b4bd-d954752f5c3d",
        questionTag: tag,
        questionText: question
      },
      success: function(data) {
        if (typeof data =='string') {
          var data = JSON.parse(data);
        }
        console.log(data);
        if(data.code == 201) {
          alert("发布成功");

          window.location.href = "../pages/user-front.html";
        } else if(data.code == 200) {
          alert("发布失败");
          return;
        }
      }
    });
  })
});
