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
                //this.silent = false;
            } else {
                console.log("toProject");               
                this.navigate("project-" + project_id);    
            }
        },

        toScrumPage: function(project_id) {
            this.urls["scrum_url"] = "project-" + project_id + "/scrum-page";
                if (this.silent) {
                    //this.silent = false;
                } else {                     
                    this.navigate("project-" + project_id + "/scrum-page");
                    console.log(this.urls[scrum_url]);
                }
        },

        toPlanning: function() {
            console.log("planning");
            if (this.silent) {
                console.log("true");
                //this.silent = false;
            } else {
                console.log("false");
                this.navigate(this.urls["scrum_url"] + "/planning");
            }
        },

        toScrumBoard: function() {
            console.log("scrum-board");
            if (this.silent) {
                //this.silent = false;
            } else {
                console.log("scrum-url", this.urls[scrum_url]);
                this.navigate(this.urls["scrum_url"] + "/scrum-board");
            }
        },
        
        toStatistics: function() {
            this.navigate(this.urls["scrum_url"] + "/statistics");
        },

        toTeamPage: function(project_id) {            
            this.urls["project_url"] = "project-" + project_id;
            
            this.navigate("project-" + project_id + "/team-page");
        },

        toTeamEditPage: function(team_id) {
            this.urls["team_url"] = this.urls["project_url"] + "/team-page/" +"edit-team-" + team_id;

            this.navigate(this.urls["team_url"] );
        },

        toTeamEditPageTab: function(tab_selected) {
            this.navigate(this.urls["team_url"] + "/" + tab_selected);
        },  
       
        urls: {
            "project_url": "",
            "scrum_url": "",
            "team_url": ""
        }, 

        hash_of_routes: {
            "scrum-page": "ProjectPage:ProjectSelected",
            "scrum-page/": {
                "planning": "goToPlanning",
                "scrum-board": "goToScrumBoard",
                "statistics": "goToStatistics"
            },
             "team-page": "DashBoard:ActiveTeam"
             /*"team-page/": {
                "planning": "goToPlanning",
                "scrum-board": "goToScrumBoard",
                "statistics": "goToStatistics"
            }*/
        },      

        routes: {
            "": "index",       		
            "project-:id/(:page(/:tab)(:team_id)(/:role))": "pageLoad"          
            //"project-:id/team-page": "teamPageLoad",
            //"project-:id/team-page/edit-team-:id(/:role)": "teamEditPageTabLoad"       
        }, 
       
        pageLoad: function(project_id, page, tab, team_id, role) {            
            this.silent = true;
            mediator.pub("ProjectPage:ProjectChecked", project_id);               
            if (page === "scrum-page") {  
                //this.silent = true; 
                mediator.pub(this.hash_of_routes[page], project_id);
                if (tab) {
                    //this.silent = true;
                    mediator.pub(this.hash_of_routes[page+"/"][tab], tab);
                }                 
            } else if (page === "team-page")  {
                mediator.pub(this.hash_of_routes[page], project_id);
                if (tab && team_id) {
                    mediator.pub("TeamPage:TeamSelected", team_id);
                    if (role) {
                        mediator.pub("TeamEditPage:TabSelected", role);
                    }
                }
            }
            this.silent = false;           
        },       
                
        teamPageLoad: function(project_id) {
            mediator.pub("DashBoard:ActiveTeam", project_id);
        },
        
        teamEditPageLoad: function(project_id, team_id) {            
            //this.projectChecked(project_id);
            this.teamPageLoad(project_id);
            mediator.pub("TeamPage:TeamSelected", team_id);
        },       
            
        teamEditPageTabLoad: function(project_id, team_id, role) {
            if(role) {
                this.teamEditPageLoad(project_id, team_id);
                mediator.pub("TeamEditPage:TabSelected", role);
            } else {
                this.teamEditPageLoad(project_id, team_id);
            }          
        }             
        
    });

})(app.Routing);