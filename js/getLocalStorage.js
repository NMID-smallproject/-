function User() {

}
User.prototype = {
	_saveStorage: function (userName,userId) {
		var self = this;
	    localStorage.setItem("userName",userName);
	    localStorage.setItem("userId",userId);
	},
	_loadStorage: function (attr) {
		var str = localStorage.getItem(attr);
		// console.log(str);
		return str;
	}
}

$(function(){
	new User({});
});