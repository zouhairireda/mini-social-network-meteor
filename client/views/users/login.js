Template.login.events({
    "submit form": function(event, template) {
        event.preventDefault();

        var user = $('#username').val();
        var password = $('#password').val();
alert(password);
        Meteor.loginWithPassword(user, password, function(err) {
            if (err) {
                alert(err.reason);
            }
        });
    }
});