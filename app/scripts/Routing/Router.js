/* Router */

(function(module) {

    module.Router = Backbone.Router.extend({
       
        initialize: function() {
            mediator.sub("ProjectPage:ProjectChecked", this.toProject, this);
            mediator.sub("ProjectPage:ProjectSelected", this.toScrumPage, this);
            mediator.sub("ScrumPage:PlanningBoardSelected", this.toPlanning, this);
            mediator.sub("ScrumPage:ScrumBoardSelected", this.toScrumBoard, this);
            mediator.sub("ScrumPage:StatBoardSelected", this.toStatistics, this);
            mediator.sub("DashBoard:ActiveTeam", this.toTeamPage, this);
            mediator.sub("TeamPage:TeamSelected", this.toTeamEditPage, this);
            mediator.sub("TeamEditPage:TabSelected", this.toTeamEditPageTab, this);           
        },

        urls: {
            "project_url": "",
            "scrum_url": "",
            "team_url": ""
        }, 

         routes: {            
            "" :  "index",            
            "project-:id" : "projectInfo",
            "project-:id/scrum-page" : "scrumPage"
        },

        index: function() {
            console.log("I am Router");           
        },

        projectInfo: function(id) {
            console.log('project');
            //mediator.pub("ProjectPage:ProjectChecked", id);
        },

        scrumPage: function(id) {
            console.log('scrum' + id);
        }, 
          
        toProject: function(model) {
            this.navigate("project-" + model.get("id"));
        },

        toScrumPage: function(project_id) {
            this.urls["scrum_url"] = "project-" + project_id + "/scrum-page";

            this.navigate("project-" + project_id + "/scrum-page", {trigger: true});
        },

        toPlanning: function() {
            this.navigate(this.urls["scrum_url"] + "/planning");
        },

        toScrumBoard: function() {
            this.navigate(this.urls["scrum_url"] + "/scrum-board");

        },
        
        toStatistics: function() {
            this.navigate(this.urls["scrum_url"] + "/statistics");
        },

        toTeamPage: function(project_id) {
            this.urls["project_url"] = "project-" + project_id;

            this.navigate("project-" + project_id + "/team-page");
        },

        toTeamEditPage: function(team_id) {
            this.urls["team_url"] = this.urls["project_url"] + "/team-" + team_id + "/team-edit-page";

            this.navigate(this.urls["project_url"] + "/team-" + team_id + "/team-edit-page");
        },

        toTeamEditPageTab: function(tab_selected) {
            this.navigate(this.urls["team_url"] + "/" + tab_selected);
        }     

    });

})(app.Routing);