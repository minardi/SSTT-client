/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],
<<<<<<< HEAD
=======
        
        team_members_class: "watcher",
        //???
>>>>>>> parent of 4add0df... TeamMembers.Filter

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:OpenTeamMembers", this.initUsers, this);
        },

        events: {
            'click #save': 'saveCollection'
        },

        subscriptions: {
            //"TeamTab:Selected": "setTeamMemberClass",
            "UserCandidate:addToProject": "addToCollection",
            "TeamMemberSelected": "setTeamMemberClass"
        },  

        initUsers: function(element, team_id) {
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            this.collection.on('add', this.addOne, this);
        },     
      
        setTeamMemberClass: function(new_class) {
            this.team_members_class = new_class;   
            this.render();     
        },

        addToCollection: function (new_model) {
            var exist_model = this.collection.findWhere({
                                    first_name: new_model.get("first_name"), 
                                    last_name: new_model.get("last_name")
                              });

            if (exist_model) {
                exist_model.set('role', new_model.get('role')); 
            } else {                                        
                this.collection.add([new_model.attributes]);
            }
        },
        
        render: function() {
            this.$el.html(this.template());
                     console.log("renderCollection view");
            this.collection.forEach(this.renderOne, this);
            console.log("renderCollection view");
            return this;
        },

        addOne: function(model) {
            var team_members;

            team_members = new module.ModelView({model: model})
                                
            this.$el.find('.' + model.get('role')).append(team_members.render(this.team_members_class).el);    
        }
        
    });

})(app.TeamMembers);

