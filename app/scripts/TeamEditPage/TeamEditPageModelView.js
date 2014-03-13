/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
        
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #techleads": "showTeachLeads",
            "click #ok_btn": "hideConfirm"
        },

        subscriptions: {
            "Team:Selected": "render",
            "Button:Click:Back": "removeTeamPage",
            "Button:Click:BackFromTeamEditPage": "removeTeamPage",
            "TeamMembers:Saved": "showSaveMsg"
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
        
        showSaveMsg: function() {
            $("#save_confirm").removeClass();
        },     
                
        hideConfirm: function() {
            $("#save_confirm").addClass("hidden");
        },
        
        render: function(team_id) {            
            this.$el.append(this.template());           
            mediator.pub("TeamEditPage:Open", { element: this.$el, team_id: team_id });            
            this.showWatchers();
            return this;
        },   
               
        removeTeamPage: function() {
            this.$el.removeClass("hiddenTeams");
            this.$el.find(".team-edit-page").remove();
        }
    });

})(app.TeamEditPage);
