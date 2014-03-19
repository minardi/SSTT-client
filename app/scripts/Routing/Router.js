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

        urls: {
            "project_url": "",
            "scrum_url": "",
            "team_url": ""
        }, 

        routes: {
            "": "index",
       		"project-:id": "projectChecked",
            "project-:id/team-page": "teamPageLoaded",
            "project-:id/team-page": "teamPageLoad",
            "project-:p_id/team-:t_id/team-edit-page": "teamEditPageLoad",
            "project-:id/scrum-page": "scrumPageLoad"         
        },
        
        teamPageLoaded: function(project_id) {
            console.log('team pageworks');        
        },
        
        scrumPageLoad: function(project_id) {
            mediator.pub("ProjectPage:ProjectSelected", project_id)
        },
        
        teamEditPageLoad: function(project_id, team_id) {
            this.projectChecked(project_id);
            this.teamPageLoad(project_id);
            //mediator.pub("DashBoard:ActiveTeam", project_id);
            mediator.pub("TeamPage:TeamSelected", team_id);
        },
        
        teamPageLoad: function(project_id) {
            mediator.pub("DashBoard:ActiveTeam", project_id);
        },
        
        projectChecked: function(project_id) {
            this.silent = true;
            mediator.pub("ProjectPage:ProjectChecked", project_id);
        },
        
        index: function() {
            console.log("I am Router");           
        },

        toProject: function(project_id) {
            console.log(this.silent);
            if (this.silent) {
                this.silent = false;
            } else {
                console.log("1");
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
            this.navigate(this.urls["scrum_url"] + "/scrum-board");

        },
        
        toStatistics: function() {
            this.navigate(this.urls["scrum_url"] + "/statistics");
        },

        toTeamPage: function(project_id) {
            this.urls["project_url"] = "project-" + project_id;
            console.log("1111");
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