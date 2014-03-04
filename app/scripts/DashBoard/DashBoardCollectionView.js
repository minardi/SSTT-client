/* DashBoard */

(function(module, sstt) {
        
    module.CollectionView = Backbone.View.extend({       
        
        template: JST['app/scripts/DashBoard/DashBoardCollectionTpl.ejs'],        
        
        initialize: function() {
            this.collection = new module.Collection();   
            this.collection.add([
                {context: 'Delete'}, 
                {context: 'Configure'},  
                {context: 'Back'},
                {context: 'Team'}
                ])                   
        },           

        events: {
        },

        project: {},

        subscriptions: {
            "Projects:getInfo": "makeProject"
            //"Team:getInfo": "collectionforTeams"
        },          

        accessAllow: function () {           
            return (this.project.toJSON().pm.user_id == sstt.user.getId()) ? true : false
        },
        
        makeProject: function (project) {
            this.project = project;            
            this.render();
        },

        render: function() {           
            this.$el.append(this.template);
            this.collection.each(this.renderOne, this);         
            return this;
        },

        renderOne: function (button_model) {  
            button_model.set('project_id', this.project.id);
            if (this.accessAllow()) {               
                var button = new module.ModelView({
                model: button_model                
                }); 
                this.$el.find(".dashboard").append(button.render().el);
            };                              
        }    
    });

})(app.DashBoard, sstt);

