/* DashBoard */

(function(module) {
        
    module.ModelView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardTpl.ejs'],        
 		
	    initialize: function() {
            
        },

        tagName: 'button', 
        className: 'btn btn-info',    
                       
        events: {
            //'#btn-team click': 'goToTeamList'
        },        
        
        templates: {
            back: JST["app/scripts/DashBoard/DashBtnBack.ejs"],
            team: JST["app/scripts/DashBoard/DashBtnTeam.ejs"],
            config: JST["app/scripts/DashBoard/DashBtnConfig.ejs"],
            del: JST["app/scripts/DashBoard/DashBtnDel.ejs"]
        },

        subscriptions: {

        },	

        render: function() { 
            //this.id = this.model.toJSON().context;                      
            this.$el.attr('id', this.model.toJSON().context).html(this.templates[this.model.toJSON().context]);		    
	        return this;
        }		
		 
	});

})(app.DashBoard);
