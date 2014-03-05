/* TeamMembers */

(function(module) {
        
	module.ModelView = Backbone.View.extend({	  
        el: $(".team_members_box"),
		
        template: JST['app/scripts/TeamMembers/TeamMembersTpl.ejs'],        
 		
		initialize: function() {
            this.render();
        },
        
        render: function() {
		    this.$el.html(this.template(this.model.toJSON()));
			return this;
        }		
		 
	});

})(app.TeamMembers);
