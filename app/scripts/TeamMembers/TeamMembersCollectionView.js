/* TeamMembers */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
        
        collection: new module.Collection(),
		
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],        
 		
		initialize: function() {
            this.render();
        },

        events: {
        },

        subscriptions: {
        },	

        render: function() {
            this.$el.append(this.template()); 
		    this.collection.forEach(this.addOne, this);
			return this;
        },

        addOne: function() {
            var team_members = new module.ModelView({model: new module.Model});
            this.$el.find(".team_members-list").append(team_members.render().el);
        }
	});

})(app.TeamMembers);

