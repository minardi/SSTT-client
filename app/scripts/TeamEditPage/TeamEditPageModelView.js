/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	       
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
            Backbone.Mediator.pub("TeamTab:Selected", "watcher");
        },

        showDevelopers: function () {
            Backbone.Mediator.pub("TeamTab:Selected", "developer");
        },

        showTeachLeads: function () {
            Backbone.Mediator.pub("TeamTab:Selected", "techlead");
        },

        initialize: function () {
            this.showWatchers();
        },    

        render: function(team_id) {            
            this.$el.append(this.template());
            //one pub, and use object as attribute
            Backbone.Mediator.pub("TeamEditPage:Open", this.$el.find('.candidats'), team_id);
            Backbone.Mediator.pub("TeamEditPage:OpenTeamMembers", this.$el.find('.team-members'), team_id);
            return this;
        },
        
        
        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
    });

})(app.TeamEditPage);
