UI.registerHelper('getGlobal', function(varName) {
	return Globals[varName];
});

UI.registerHelper('setTitle', function(title) {
	if(!title) {
		titre = Globals.appName;
	} else {
		title += ' - ' + Globals.appName;
	}
	document.title = title;
});