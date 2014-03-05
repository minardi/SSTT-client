/* TeamMembers */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
        
        collection: new module.Collection(),
		
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],        

       initialize: function() {
        this.render();
            //Backbone.Mediator.sub("TeamEditPage:Open", this.initUsers, this);
        }, 

     /*   initUsers: function() {
            team_id = 5;
            this.collection = new module.Collection(team_id);
            //this.collection.on('sync', this.render, this);
            this.collection.on('sync', this.show, this);
        },

        show: function () {
           console.log(this.collection.toJSON());
        },
*/
        render: function() {
            this.$el.append(this.template()); 
		    this.collection.forEach(this.addOne, this);
			return this;
        },

        addOne: function() {
            var team_members_view = new module.ModelView({model: team_member});
            this.$el.find(".team_members-list").append(team_members_view.render().el);
        }
	});

})(app.TeamMembers);

