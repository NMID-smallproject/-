// //改下面页面数字的颜色
// window.onload = function(){
// 	pagesList = document. getElementsByClassName("pages-list")[0]. getElementsByTagName("li");
// 	//pageList拿到分页栏的6个直接分页框li，数组
// 	pages = document. getElementsByClassName("pages")[0].getElementsByTagName("li");
// 	//pages拿到13条li 页面，数组
// 	var left = document.getElementsByClassName("pages-list")[0]. getElementsByTagName("span")[0];
// 	//left 拿到上一页的引用
// 	var right = document.getElementsByClassName("pages-list")[0]. getElementsByTagName("span")[1];
// 	//right拿到下一页的引用
// 	pagesList[0].getElementsByTagName("a")[0]. className ="onclickpage"; 
// 	//默认第一张页面被选中，分页框的数字变色
// 	pagenumber = document.getElementsByClassName("pagenumber")[0];
// 	//pagenumber获得总页数的引用
// 	var sure = document.getElementsByClassName("sure")[0].getElementsByTagName("a")[0];
// 	//sure获得确认span的a元素的引用
// 	pagenumber.innerHTML = pages.length;  //求出并更改页面的页数

// 	for (i = 0; i < pagesList.length; i++){  // 给每个li一个属于自己的页数
// 		pagesList[i].index = i+1;
// 	}
// 	for (i = 0; i < pagesList.length; i++){ // 点击并切换到某页
// 		pagesList[i]. onclick = function(){
// 			change(this.index)
// 		}
// 	} 
// 	left.onclick = function(){
// 		for (i = 0; i < pagesList.length; i++){
// 			if (i != 0 && pagesList[i].getElementsByTagName("a")[0].className == "onclickpage"){
// 				change(i + pagesList[0].index - 1);
// 			}
// 		}
// 	}
// 	right.onclick = function(){
// 		for (i = 0; i < pagesList.length; i++){
// 			if (i != pagesList.length-1 && pagesList[i].getElementsByTagName("a")[0].className == "onclickpage"){
// 				change(i + pagesList[0].index + 1);
// 			}
// 		}
// 	}
//     sure.onclick = function(){
//     	var choosepage = document.getElementsByClassName("page-input")[0].getElementsByTagName("input")[0];
//     	change(choosepage.value);
//     	change(choosepage.value); //调用两次函数是为了防止当跳转到首页或者尾页的时候不能正确跳转
//     	//例如当输入12的时候，change函数可能将直接进行到else里面而是使页面停留在第10页
//     	//当输入1时，也一样，会停留在第4页
//     }
// }
// function change(thisIndex){
// 	for (i = 0; i < pagesList.length; i++){  //更改被选中页面的样式
// 		pagesList[i].getElementsByTagName("a")[0]. className ="";
// 	}
// 	if (pagesList[0].index <= 1 && thisIndex < pagesList[pagesList.length/2].index){  //前面几个页面的切换
// 		pagesList[thisIndex - 1].getElementsByTagName("a")[0]. className = "onclickpage";
// 	}
// // 后面几个页面的切换
// 	else if (pagesList[pagesList.length-1].index >= pages.length && thisIndex >= pagesList[pagesList.length/2].index){		
// 		j = thisIndex - pagesList[0].index;
// 		pagesList[j].getElementsByTagName("a")[0]. className = "onclickpage";  
// 	}
// 		//中间页面的任意切换
// 	else{
// 		pagesList[pagesList.length / 2].getElementsByTagName("a")[0]. className = "onclickpage";
// 		var j = thisIndex -  pagesList[pagesList.length / 2].index;
// 		if (j > pages.length - pagesList[pagesList.length-1].index){
// 			j = pages.length - pagesList[pagesList.length-1].index;
// 		}
// 		else if (j < -pagesList[0].index + 1){
//             j = -pagesList[0].index + 1;
// 		}
// 		for (i = 0; i < pagesList.length; i++){
// 			pagesList[i].index += j;
// 			var theli = pagesList[i].getElementsByTagName("a")[0];
// 			theli.innerHTML = pagesList[i].index;
// 		}
// 	}
// }

// loadAtr($);