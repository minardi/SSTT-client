/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],
        
        mode: 'watcher',

        initialize: function() {
            mediator.sub("TeamEditPage:OpenTeamMembers", this.initUsers, this);
        },

        events: {
            "click #save": "saveCollection"
        },

        subscriptions: {
            "UserCandidate:addToProject": "addToCollection",
            "TeamTab:Selected": "setMode"
        },  

        setMode: function(new_mode) {
            this.mode = new_mode;
        },

        saveCollection: function() {
            this.collection.each(function(model) {
                model.save();
            })
        },

        initUsers: function(data) {
            this.team_id = data["team_id"];
            this.setElement(data["element"]);

            this.collection = new module.Collection(data["team_id"]);
            this.collection.fetch();

            this.collection.on("sync", this.render, this);
            this.collection.on("add", this.renderOne, this);
        },     

        addToCollection: function(attributes) {
            var exist_model = this.collection.findWhere({
                                    first_name: attributes["first_name"],
                                    last_name: attributes["last_name"]
                              });

            if (exist_model) {
                exist_model.set("role", attributes["role"]); 
            } else { 
                attributes["role"] = this.mode;
                attributes["team_id"] = this.team_id;
                this.collection.add(attributes);
            }
        },
        
        render: function() {
            this.$el.html(this.template());
            this.collection.forEach(this.renderOne, this);
            return this;
        },

        renderOne: function(model) {
            var team_members;

            team_members = new module.ModelView({model: model});
            team_members.mode = this.mode;

            this.$el.find(".team-members-list").append(team_members.render().el);    
        }
                
    });

})(app.TeamMembers);

