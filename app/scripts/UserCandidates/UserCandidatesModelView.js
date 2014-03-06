/* UserCandidates */

(function(module) {

	module.ModelView = Backbone.View.extend({	

    tagName: "div",

    className: "user-box",
    
    role: "",   
		
    template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],

    initialize: function() {
      this.model.on("change", this.render, this);
    },

    events: {
       "click" : "addToProject"
    },      

    subscriptions: {
        "TeamTab:Selected": "setRole"
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
      Backbone.Mediator.pub("UserCandidate:addToProject", this.model);
      
    }		
		 
	});

})(app.UserCandidates);
