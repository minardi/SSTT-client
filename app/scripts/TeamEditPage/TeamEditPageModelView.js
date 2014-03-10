/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	    
        initialize: function () {
            this.showWatchers();
        },  
        
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #techleads": "showTeachLeads"
        },

        subscriptions: {
            "Team:Selected": "render",
            "Button:Click:Back": "removeTeamPage",
            "Button:Click:BackFromTeamEditPage": "removeTeamPage"
        },     

        showWatchers: function () {            
            mediator.pub("TeamTab:Selected", "watcher");
        },

        showDevelopers: function () {
            mediator.pub("TeamTab:Selected", "developer");
        },

        showTeachLeads: function () {
            mediator.pub("TeamTab:Selected", "techlead");
        },         

        render: function(team_id) {            
            this.$el.append(this.template());           
            mediator.pub("TeamEditPage:Open", { element: this.$el.find('.candidates'), team_id: team_id });
            mediator.pub("TeamEditPage:OpenTeamMembers", { element: this.$el.find('.team-members'), team_id: team_id });
            return this;
        },   
               
        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
    });

})(app.TeamEditPage);
