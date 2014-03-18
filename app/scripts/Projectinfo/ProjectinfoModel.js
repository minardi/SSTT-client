/* Projectinfo */

(function(module) {

    module.Model = Backbone.Model.extend({

        urlRoot: "projects/info",

        defaults: {
            title: "",
            description: "",
            owner: "",
            start: "",
            finish: "",
            role: "",
            pm: { 
                user_id: "",
                first_name: "",
                last_name: ""
            }
        }

    });

})(app.Projectinfo);
