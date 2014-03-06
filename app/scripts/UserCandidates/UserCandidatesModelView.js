/* UserCandidates */

(function(module) {

	module.ModelView = Backbone.View.extend({	     
		
    template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],

    initialize: function() {
      this.model.on("change", this.render, this);
      this.role = "watcher";
    },      

    subscriptions: {
        "TeamMemberSelected": "setRole"
    },

    setRole: function(role_new) {
        //rename role var
        //refactor
        this.role = role_new;       
    },

    tagName: "div",

    className: "user-box",
    
    events: {
       "click" : "addToProject"
    },

    render: function() {
       this.$el.html(this.template(this.model.toJSON()));
       return this;
      },

    addToProject: function() {
      this.model.set("role", this.role);
      Backbone.Mediator.pub("UserCandidate:addToProject", this.model); 
    }		
		 
	});

})(app.UserCandidates);
