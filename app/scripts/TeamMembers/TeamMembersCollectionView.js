/* TeamMembers */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
        
        collection: new module.Collection(),
		
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],        
 		
        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:Open2", this.initUsers, this);
            //this.render();
        }, 

        initUsers: function(element, team_id) {
            //team_id = 5;
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },       

        render: function() {
            this.$el.append(this.template());
		    this.collection.forEach(this.addOne, this);
			return this;
        },

        addOne: function(model) {
            var team_members = new module.ModelView({model: model});
            this.$el.find('.list').append(team_members.render().el);
        }
	});

})(app.TeamMembers);

