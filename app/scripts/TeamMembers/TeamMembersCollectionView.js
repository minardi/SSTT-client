/* TeamMembers */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({       
        
        template: JST['app/scripts/TeamMembers/TeamMembersCollectionTpl.ejs'],
        
        team_members_class : "watcher",

        initialize: function() {
            Backbone.Mediator.sub("TeamEditPage:OpenTeamMembers", this.initUsers, this);
        },

        events: {
            'click #save': 'saveCollection'
        },

        subscriptions: {
            "UserCandidate:addToProject": "addToCollection",
            "TeamMemberSelected" :"setTeamMemberClass"
        },  

        initUsers: function(element, team_id) {
            this.setElement(element);
            this.collection = new module.Collection(team_id);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);
        },     
      
        setTeamMemberClass: function(new_class) {
            this.team_members_class = new_class;        
        },

        addToCollection: function (new_model) {             
            this.collection.each(function(exist_model) {
                if ((exist_model.get('first_name') === new_model.get('first_name')) &&(exist_model.get('last_name') === new_model.get('last_name'))) {
                    exist_model.set('role', new_model.get('role')); 
                } else {                    
                    this.collection.add([new_model.attributes]);
                }}, this);            
            this.render();
        },
        
        saveCollection: function () {
            this.collection.each(function (model) {
                model.save();
            }, this);
        },
        
        render: function() {
            this.$el.html(this.template());
            this.collection.forEach(this.addOne, this);
            return this;
        },

        addOne: function(model) {           
            var team_members = new module.ModelView({model: model});
            this.$el.find('.' + model.get('role')).append(team_members.render().el);
          
        }
    });

})(app.TeamMembers);

