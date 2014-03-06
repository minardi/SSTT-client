/* TeamMembers */

(function(module) {

        module.ModelView = Backbone.View.extend({              

        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],

        initialize: function () {
            this.model.on('change', this.render, this);
        },

        subscription: {
            "TeamTab:Selected": "chek"
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));	
        }         
    });

})(app.TeamMembers);
