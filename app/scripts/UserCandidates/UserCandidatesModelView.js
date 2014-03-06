/* UserCandidates */

(function(module) {

	module.ModelView = Backbone.View.extend({	

    tagName: "div",

    className: "user-box",
    
    role: "",   
		
    template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],

    initialize: function() {
      this.model.on("change", this.render, this);
      //this.role = "watcher";
    },      

    subscriptions: {
        "TeamTab:Selected": "setRole"
    },

     events: {
        "click": "addToProject"
    },

    setRole: function(role_new) {
        //rename role var
        //refactor
        this.role = role_new;       
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
