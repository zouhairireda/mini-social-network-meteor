Utils = {
	formatDate: function(date) {
		var date = new Date(date);

		var day = date.getDate().toString();
		var month = (date.getMonth() + 1).toString();
		var year = date.getFullyYear();

		if(day.length === 1) {
			day = '0' + day;
		}
		if(month.length === 1) {
			month = '0' + month;
		}

		return day + '/' + month + '/' + year;
	},
	pathFor: function(routeName, params) {
		var route = Router.routes[routeName].path(params);
		return route;
	}
};