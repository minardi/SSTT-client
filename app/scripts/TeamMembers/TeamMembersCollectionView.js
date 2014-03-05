/* TeamMembers */

(function(module) {

    module.CollectionView = Backbone.View.extend({

        collection: new module.Collection(),

        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],

       initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:Open", this.initUsers, this);
        }, 

        initUsers: function() {
            team_id = 5;
            this.collection = new module.Collection(team_id);
            //this.collection.on('sync', this.render, this);
            this.collection.on('sync', this.show, this);
        },

        show: function () {
           console.log(this.collection.toJSON());
        },

        render: function() {
            this.collection.forEach(this.addOne, this);
            return this;
        },

        addOne: function() {
            var team_members = new module.ModelView({model: new module.Model});
            this.$el.append(team_members.render().el);
            return this;
        }
    });

})(app.TeamMembers);

