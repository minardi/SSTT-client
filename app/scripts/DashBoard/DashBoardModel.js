/* DashBoard */

(function(module) {

    module.Model = Backbone.Model.extend({

       defaults: {
           content: "",
           project_id: "",
           provision: []
       }
    });

})(app.DashBoard);
