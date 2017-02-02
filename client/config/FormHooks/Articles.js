AutoForm.hooks({
	'addArticles': {
		onSuccess: function(formType, result) {
			Router.go('home');
		}
	}
});