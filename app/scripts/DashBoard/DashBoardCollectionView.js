/* DashBoard */

(function(module) {
        
    module.CollectionView = Backbone.View.extend({	     
		
        template: JST['app/scripts/DashBoard/DashBoardCollectionTpl.ejs'],        
 		
	    initialize: function() {
                       
        },           

        events: {
        },
        
        subscriptions: {
            "Projects:getInfo": "collectionForProjects"
            //"Team:getInfo": "collectionforTeams"
        },        	

        getUserInfo: function (current_user) {
            console.log('user', current_user);
        },
        
        collectionForProjects: function (model) {
                console.log(model.toJSON().pm);                             
                this.collection = new module.Collection();
                this.collection.add([                    
                    {context: 'team'},
                    {context: 'del'},
                    {context: 'config'},
                    {context: 'back'}
                ])      
            this.render();
        },

        collectionForTeams: function (model) {
            this.collection = new module.Collection();
            this.collection.add([                                       
                    {context: 'del'},
                    {context: 'config'},
                    {context: 'back'}
            ]);                
            this.render();
        },

        render: function() {           
            this.$el.html(this.template);
            this.collection.each(this.renderOne, this);		    
	        return this;
        },

        renderOne: function (button_model) {            
            var button = new module.ModelView({
                model: button_model                
            });                
            this.$el.append(button.render().el);            
        }

		 
	});

})(app.DashBoard);

