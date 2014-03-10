/* UserCandidates */

(function(module) {

    module.ModelView = Backbone.View.extend({	

        tagName: "div",

        className: "user-box",
        
        role: "",

        template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],

        initialize: function() {
            this.model.on("change", this.render, this);
            this.role = "watcher";
        },      

        subscriptions: {
            "TeamTab:Selected": "setRole"
        },

        events: {
            "click": "addToProject"
        },

        setRole: function(current_role) {
            this.role = current_role;
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        addToProject: function() {
            this.model.set("role", this.role);
            mediator.pub("UserCandidate:addToProject", this.model.toTeamMemberAttributes());
        }

    });

})(app.UserCandidates);
