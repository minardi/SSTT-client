/* ScrumBoard */

(function (module) {

    module.Model = Backbone.Model.extend({
        urlRoot: "/tasks",
        
        defaults: {
            title: "",
            status: "",
            description: "",
            story_id: "",
            sprint_id: ""
        }       
    });

})(app.ScrumBoard);
