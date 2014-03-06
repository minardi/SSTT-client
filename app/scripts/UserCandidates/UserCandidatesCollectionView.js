/* UserCandidates */

(function(module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/UserCandidates/UserCandidatesCollectionTpl.ejs'],

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:Open", this.initUserCandidates, this);
        }, 

        initUserCandidates: function(el_content, team_id) {
            //attribute of function would be hash            
            this.setElement(el_content);
            this.collection = new module.Collection(team_id);
            this.collection.on('sync', this.render, this);
        },

        render: function() {
            this.$el.append(this.template());
            //this.$users-list =  this.$el.find(".users-box .users-list");
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(user_model) {
            var user = new module.ModelView({
                model: user_model
                //role: "watcher"
            });

            this.$el.find(".users-box .users-list").append(user.render().el);
        }

    });

})(app.UserCandidates);

