/* UserCandidates */

(function(module) {
        
	module.CollectionView = Backbone.View.extend({	     
		
        template: JST['app/scripts/UserCandidates/UserCandidatesCollectionTpl.ejs'],        

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:Open", this.initUserCandidates, this);
        }, 

        initUserCandidates: function(el_content, team_id) {
            this.setElement(el_content);
            console.log(team_id);
            this.collection = new module.Collection(team_id);
            this.collection.on('sync', this.render, this);
        },

        render: function() {
            this.$el.append(this.template());
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(user_model) {
            var user = new module.ModelView({
                model: user_model
            });
            
            this.$el.find(".users-box .users-list").append(user.render().el);
            //console.log(user_model.toJSON());
        }
		 
	});

})(app.UserCandidates);

