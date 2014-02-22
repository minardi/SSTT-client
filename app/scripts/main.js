var user,
    app = {
    ProductBacklogStories: {},
    Projects: {},
    User: {},
    empty: {}
};

$(function() {
    'use strict';

    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            // 'X-CSRF-Token': '<%= form_authenticity_token.to_s %>'
        }
    });
  console.log(user);
      user = new app.User.ModelView({
        el: $('.user')
    });
    console.log(user);
    Backbone.Mediator.sub("!user_load", function() {
        var my_project = new app.Projects.CollectionView({
                            el: $(".content")})});

    
});
