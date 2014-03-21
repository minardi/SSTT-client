/* ScrumBoard */

(function (module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/ScrumBoard/ScrumBoardCollectionTpl.ejs'],
        
        subscriptions: {   
            "ProjectPage:ProjectSelectedRole": "checkRole",
            'ProjectPage:ProjectSelected': 'initCollection',      
            'ScrumPage:ScrumBoardSelected': 'setElementAndRender',
            "ScrumBoard:moveTask": "renderOne"
        },

        checkRole: function(role) {
            this.role_of_user = (role === "developer");            
        },
        
        initCollection: function (project_id) {  
            this.collection = new module.Collection(project_id);                            
        },   
            
        setElementAndRender: function(content_el) {               
            this.setElement(content_el);
            this.collection.fetch();   
            this.collection.on('sync', this.renderEach, this);                           
        },

        renderEach: function () {
            this.$el.html(this.template());
            this.collection.each(this.renderOne,this);
            return this;
        },

        renderOne: function (task_model) {            
            var task = new module.ModelView({
                    model: task_model
                });
            this.$el.find('.' + task_model.get('status')).append(task.render().el);    
            mediator.pub("ScrumBoard:CheckRole", this.role_of_user);        
        }

    });

})(app.ScrumBoard);