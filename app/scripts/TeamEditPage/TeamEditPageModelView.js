/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	       
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #TeachLeads": "showTeachLeads"
        }, 

        initialize: function () {
            this.showWatchers();
        },         

        subscriptions: {
            "Team:Selected": "render",
            "Button:Click:Back": "removeTeamPage"
        },

        render: function(team_id) {            
            this.$el.append(this.template);
	        Backbone.Mediator.pub("TeamEditPage:Open", $('.candidates-list'), team_id);
            Backbone.Mediator.pub("TeamEditPage:Open2", $('.team-members'), team_id);
            return this;
        },
        
        showWatchers: function () {            
            Backbone.Mediator.pub("TeamMemberSelected", "watcher");

        },
        
        showDevelopers: function () {
            Backbone.Mediator.pub("TeamMemberSelected", "developer");
        },

        showTeachLeads: function () {
            Backbone.Mediator.pub("TeamMemberSelected", "techlead");
       },

        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
    });

})(app.TeamEditPage);
