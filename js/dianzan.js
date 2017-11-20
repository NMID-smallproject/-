$(document).ready(function(){
		$('#up').click(function(){
			if($(this).hasClass("dianzan")){
				var oldValue=parseInt($(this).find("span").text());
				oldValue--;//自加1
                $(this).find("span").text(oldValue);
                $(this).css('background-color','#d1ebea');
                $(this).attr('disabled',"true");//添加disabled属性
                if(oldValue==0){ $(this).find("span").text("");}
                $(this).removeAttr("disabled"); //移除disabled属性
                $(this).removeClass("dianzan");
			}

			else {
				var oldValue=parseInt($(this).find("span").text());//取出现在的值，并使用parseInt转为int类型数据
					if(isNaN(oldValue) && isNaN(oldValue)){ 
   						$(this).find("span").text(parseInt("1"));
   						   $(this).css('background-color','#4586ba');
   						   $(this).addClass("dianzan");
 					}
 					else{oldValue++;//自加1
                      $(this).find("span").text(oldValue);//将增加后的值付给原控件
                        $(this).css('background-color','#4586ba');
                        $(this).addClass("dianzan");
                  }
			}
			
	});

    $('#down').click(function(){
      if($(this).hasClass("dianzan")){
                $(this).css('background-color','#d1ebea');
                $(this).attr('disabled',"true");//添加disabled属性
                $(this).removeAttr("disabled"); //移除disabled属性
                $(this).removeClass("dianzan");
      }
      else {
         $(this).css('background-color','#4586ba');
                 $(this).addClass("dianzan");
      }
    })
});

 