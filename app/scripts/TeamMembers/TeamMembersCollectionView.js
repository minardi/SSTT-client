/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],
        
        team_members_class: "",

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:OpenTeamMembers", this.initUsers, this);
        },

        events: {
            'click #save': 'saveCollection'
        },

        subscriptions: {
            //"TeamTab:Selected": "setTeamMemberClass",
            "UserCandidate:addToProject": "addToCollection",
        },  

        initUsers: function(element, team_id) {
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
            this.collection.on('add', this.addOne, this);
        },     
      
        // setTeamMemberClass: function(new_class) {
        //     this.team_members_class = new_class;
        //     this.render();     
        // },

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
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function(model) {
            var team_members;

            team_members = new module.ModelView({model: model})

            this.$el.find('.content').append(team_members.render().el);    
        },

        saveCollection: function () {
            this.collection.each(function (model) {
                model.save();
            }, this);
        },
        
    });

})(app.TeamMembers);

