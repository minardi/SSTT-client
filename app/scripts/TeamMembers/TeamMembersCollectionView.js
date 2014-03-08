/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:OpenTeamMembers", this.initUsers, this);
        },

        events: {
            'click #save': 'saveCollection'
        },

        subscriptions: {
            "UserCandidate:addToProject": "addToCollection",
            "TeamTab:Selected": "setMode"
        },  

        setMode: function(new_mode) {
            this.mode = new_mode;     
        },

        initUsers: function(element, team_id) {
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            this.collection.on('add', this.addOne, this);
        },     

        addToCollection: function (new_model) {
            var exist_model = this.collection.findWhere({
                                    first_name: new_model.get("first_name"), 
                                    last_name: new_model.get("last_name")
                              });

            if (exist_model) {
                exist_model.set('role', new_model.get('role')); 
            } else { 
                new_model.set('role', this.mode);                                     
                this.collection.add([new_model.attributes]);
            }
        },
        
        render: function() {
            this.$el.html(this.template());
            this.collection.forEach(this.addOne, this);
            return this;
        },

        addOne: function(model) {
            var team_members,
            team_members = new module.ModelView({model: model}) ;                
            this.$el.find(".team-members-list").append(team_members.render().el);    
        }
        
    });

})(app.TeamMembers);

