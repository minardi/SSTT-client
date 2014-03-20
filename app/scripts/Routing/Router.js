/* Router */

(function(module) {

    module.Router = Backbone.Router.extend({

        silent: false,             

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
        
        toProject: function(project_id) {            
            if (this.silent) {
                this.silent = false;
            } else {                
                this.navigate("project-" + project_id);    
            }
        },

        toScrumPage: function(project_id) {
            this.urls["scrum_url"] = "project-" + project_id + "/scrum-page";

            this.navigate("project-" + project_id + "/scrum-page");
        },

        toPlanning: function() {
           this.navigate(this.urls["scrum_url"] + "/planning");
        },

        toScrumBoard: function() {
        console.log("router navigate");
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
        },
        
        urls: {
            "project_url": "",
            "scrum_url": "",
            "team_url": ""
        }, 

        routes: {
            "": "index",
       		"project-:id": "projectChecked",       
            "project-:id/scrum-page": "scrumPageLoad",            
            "project-:id/scrum-page(/:tab)": "planningLoad",
            "project-:id/scrum-page/scrum-board": "scrumBoardLoad",
            "project-:id/scrum-page/statistics": "statisticsLoad",
            "project-:id/team-page": "teamPageLoad",
            "project-:id/team-:id/team-edit-page": "teamEditPageLoad",         
            "project-:id/team-:id/team-edit-page/:role": "teamEditPageTabLoad"                    
        },
        
        projectChecked: function(project_id) {
            this.silent = true;
            mediator.pub("ProjectPage:ProjectChecked", project_id);
        },

        scrumPageLoad: function(project_id) {
            mediator.pub("ProjectPage:ProjectSelected", project_id)
        },

        planningLoad: function(project_id) {
            this.scrumPageLoad(project_id);            
            mediator.pub("goToPlanning");
        },

        scrumBoardLoad: function(project_id) {
            this.scrumPageLoad(project_id);
            mediator.pub("goToScrumBoard");
        },
        
        statisticsLoad: function(project_id) {
            this.scrumPageLoad(project_id);
            mediator.pub("goToStatistics");
        },

        teamPageLoad: function(project_id) {
            mediator.pub("DashBoard:ActiveTeam", project_id);
        },
        
        teamEditPageLoad: function(project_id, team_id) {            
            this.projectChecked(project_id);
            this.teamPageLoad(project_id);
            mediator.pub("TeamPage:TeamSelected", team_id);
        },       
            
        teamEditPageTabLoad: function(project_id, team_id, role) {
            this.teamEditPageLoad(project_id, team_id);
            mediator.pub("TeamEditPage:TabSelected", role);
        }
              
        

    });

})(app.Routing);