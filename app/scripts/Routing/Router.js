/* Router */

(function(module) {

    module.Router = Backbone.Router.extend({

        routes: {
            "teams/:id/team_edit_page": "showTeamEditPage",
            "projects" : "index"
        },

        index: function() {
            console.log("I am Router");
        },
        
        showTeamEditPage: function(id) {
            
        }

    });

})(app.Routing);