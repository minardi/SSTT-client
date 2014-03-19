/* Router */

(function(module) {

    module.Router = Backbone.Router.extend({

        silent: false,  

        element: $('.b-main#ScrumPage'),      

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
            "project-:id/team-page": "teamPageOpen", 
            "project-:id/team-:id/team-edit-page": "teamEditPageOpen",
            "project-:id/team-:id/team-edit-page/:role": "teamEditPageTabOpen"
            //"project-:id/scrum-page": "projectSelected",
            //"project-:id/scrum-page/planning": "planningBoardSelected",
            //"project-:id/scrum-page/scrum-board": "scrumBoardSelected"
        },

        index: function() {
            console.log("I am Router");           
        },

        projectChecked: function(project_id) {
            this.silent = true;
            mediator.pub("ProjectPage:ProjectChecked", project_id);
        },

        teamPageOpen: function(project_id) {            
            mediator.pub("DashBoard:ActiveTeam", project_id);
        },

        teamEditPageOpen: function(project_id, team_id) {
            console.log("team_edit");

            //mediator.pub("TeamPage:TeamSelected", team_id);
        },

        teamEditPageTabOpen: function(project_id, team_id, role) {
            console.log(role);
            mediator.pub("TeamEditPage:TabSelected", role);
        },

        /*projectSelected: function(project_id) {
            console.log("scrum");
            mediator.pub("ScrumPage:PlanningBoardSelected", this.element, project_id);
        },

        planningBoardSelected: function (project_id) {
            mediator.pub("ScrumPage:PlanningBoardSelected", this.element, project_id);
        },
        
        scrumBoardSelected: function(project_id) {
            console.log(project_id);
            console.log("board");
            mediator.pub("ScrumPage:ScrumBoardSelected", this.element);
        },
        */
        
        toProject: function(project_id) {            
            if (this.silent) {
                this.silent = false;
            } else {                
                this.navigate("project-" + project_id);    
            }
        },

        toScrumPage: function(project_id) {
            this.urls["scrum_url"] = "project-" + project_id + "/scrum-page";

            this.navigate("project-" + project_id + "/scrum-page", {trigger: true});
        },

        toPlanning: function() {
            this.navigate(this.urls["scrum_url"] + "/planning", {trigger: true});
        },

        toScrumBoard: function() {
            this.navigate(this.urls["scrum_url"] + "/scrum-board", {trigger: true});

        },
        
        toStatistics: function() {
            this.navigate(this.urls["scrum_url"] + "/statistics");
        },

        toTeamPage: function(project_id) {
            this.urls["project_url"] = "project-" + project_id;

            this.navigate("project-" + project_id + "/team-page", {trigger: true});                 
        },

        toTeamEditPage: function(team_id) {
            this.urls["team_url"] = this.urls["project_url"] + "/team-" + team_id + "/team-edit-page";

            this.navigate(this.urls["project_url"] + "/team-" + team_id + "/team-edit-page", {trigger: true});
        },

        toTeamEditPageTab: function(tab_selected) {
            this.navigate(this.urls["team_url"] + "/" + tab_selected, {trigger: true});
        }     

    });

})(app.Routing);