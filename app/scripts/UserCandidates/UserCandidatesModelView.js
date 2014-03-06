/* UserCandidates */

(function(module) {

	module.ModelView = Backbone.View.extend({	

    tagName: "div",

    className: "user-box",
    
    role: "",   
		
    template: JST['app/scripts/UserCandidates/UserCandidatesTpl.ejs'],

    initialize: function() {
      this.model.on("change", this.render, this);
<<<<<<< HEAD

      this.role = "watcher";
=======
>>>>>>> parent of 4add0df... TeamMembers.Filter
    },      

    //model: module.Model,

    subscriptions: {
        "TeamMemberSelected": "setRole"
    },

    setRole: function(role_new) {
        //rename role var
        //refactor
        this.role = role_new;       
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
