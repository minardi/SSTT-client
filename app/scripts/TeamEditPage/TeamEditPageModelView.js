/* TeamEditPage */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
 		
        template: JST['app/scripts/TeamEditPage/TeamEditPageTpl.ejs'],        
 	       
        events: {
            "click #watchers": "showWatchers",
            "click #developers": "showDevelopers",
            "click #TeachLeads": "showTeachLeads"
        },          

        subscriptions: {
            "Team:Selected": "render"
        },	

        render: function() {            
            this.$el.append(this.template);
	        Backbone.Mediator.pub("TeamEditPage:Open", $('.candidates-list'));
            return this;
        },
        
        showWatchers: function () {            
            Backbone.Mediator.pub("TeamEditPage:WatchersSelected", this.element);
        },
        
        showDevelopers: function () {            
            Backbone.Mediator.pub("TeamEditPage:DevelopersSelected", this.element);
        },

        showTeachLeads: function () {

            Backbone.Mediator.pub("TeamEditPage:TeachLeadsSelected", this.element);
        }		 
    });

})(app.TeamEditPage);
