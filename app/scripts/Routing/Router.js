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
                if (this.silent) {
                    this.silent = false;
                } else {  
                    this.navigate("project-" + project_id + "/scrum-page");
                }
        },

        toPlanning: function() {
           if (this.silent) {
                    this.silent = false;
                } else {
                   console.log("planning");
                   console.log(this.urls["scrum_url"]);
                   this.navigate(this.urls["scrum_url"] + "/planning");
                }
        },

        toScrumBoard: function() {
            if (this.silent) {
                    this.silent = false;
                } else {
                   console.log("scrumboard");
                   this.navigate(this.urls["scrum_url"] + "/scrum-board");
                }
            //this.navigate(this.urls["scrum_url"] + "/scrum-board");
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
             "team-page": "DashBoard:ActiveTeam",
             "team-page/": {
                "planning": "goToPlanning",
                "scrum-board": "goToScrumBoard",
                "statistics": "goToStatistics"
            }
        },      

        routes: {
            "": "index",
       		//"project-:id": "projectChecked",
            "project-:id/(:page(/:tab))": "pageLoad",            
            //"project-:id/scrum-page(/:tab)": "makeRoute",          
            "project-:id/team-page": "teamPageLoad",
            "project-:id/team-page/edit-team-:id(/:role)": "teamEditPageTabLoad"       
        }, 
                
        /*projectChecked: function(project_id) {
            this.silent = true;
            mediator.pub("ProjectPage:ProjectChecked", project_id);
        },
*/
        pageLoad: function(project_id, page, tab) {
               this.silent = true;
               mediator.pub("ProjectPage:ProjectChecked", project_id);               
               if (page) {                                  
                   mediator.pub(this.hash_of_routes[page], project_id);
                   if (tab) {s
                        mediator.pub(this.hash_of_routes[page+"/"][tab], tab);                        
                    } 
                 }              
        },
        
        
        scrumPageLoad: function(project_id) {
            mediator.pub("ProjectPage:ProjectSelected", project_id);
        },

        makeRoute: function(project_id, tab) {                           
            this.scrumPageLoad(project_id);
            if (tab) {
                mediator.pub(this.hash_of_routes["scrum-page"][tab]);          
            }                 
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