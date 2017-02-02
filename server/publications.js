Meteor.publish("allCategories", function(){
	return Categories.find({});
});

Meteor.publish("allArticles", function(){
	return Articles.find({});
});