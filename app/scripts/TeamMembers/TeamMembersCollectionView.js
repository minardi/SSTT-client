/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({

        collection: new module.Collection(),
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],
        
        team_members_class : "watcher",

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:Open2", this.initUsers, this);
        },

        events: {
            "click #save": "save"
        },

        subscriptions: {
            "UserCandidate:addToProject": "addOne",
            "TeamMemberSelected" :"setTeamMemberClass"
        }, 

        setTeamMemberClass: function(new_class) {
            this.team_members_class = new_class;
            this.render();
        },

        initUsers: function(element, team_id) {
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },       

        render: function() {
            this.$el.html(this.template());
            this.collection.forEach(this.addOne, this);
            return this;
        },

        addOne: function(model) {
            
            var team_members;
                
            if (model.get("role") === this.team_members_class) {
               // this.model = model;
                team_members = new module.ModelView({model: model});
                this.$el.find('.list').append(team_members.render().el); 
            }
            //console.log(team_members);
        },

        save: function() {
            console.log(this.model);
            //this.save();
        }
    });

})(app.TeamMembers);

