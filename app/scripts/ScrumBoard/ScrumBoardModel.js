/* ScrumBoard */

(function (module) {

    module.Model = Backbone.Model.extend({

        defaults: {
            title: '',
            status: 'todo',
            description: '',
            story_id: '',
            sprint_id: ''
        }       
    });

})(app.ScrumBoard);
