/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	       
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #TeachLeads": "showTeachLeads"
        },          

        subscriptions: {
            "Team:Selected": "render",
            "Button:Click:Back": "removeTeamPage"
        },	

        render: function(team_id) {            
            this.$el.append(this.template);
	        Backbone.Mediator.pub("TeamEditPage:Open", $('.candidates-list'), team_id);
            return this;
        },
        
        showWatchers: function () {            
            Backbone.Mediator.pub("TeamEditPage:WatchersSelected", this.element);
        },
        
        showDevelopers: function () {            
            Backbone.Mediator.pub("TeamEditPage:DevelopersSelected", this.element);
        },

        showTeachLeads: function () {

            Backbone.Mediator.pub("TeamEditPage:TeachLeadsSelected", this.element);
        },

        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
    });

})(app.TeamEditPage);
