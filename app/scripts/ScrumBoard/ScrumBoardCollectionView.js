/* ScrumBoard */

(function (module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/ScrumBoard/ScrumBoardCollectionTpl.ejs'],
        
        subscriptions: {   
            'Project:Selected': 'init',      
            'ScrumPage:ScrumBoardSelected': 'setElementAndRender'
        },
        
        initCollection: function (project_id) {  
            this.collection = new module.Collection(project_id);                            
        },   
            
        setElementAndRender: function(content_el) {           
            this.setElement(content_el);
            this.collection.fetch();
            this.collection.on('sync', this.render, this);                  
        },

        render: function () {
            this.$el.html(this.template()); 
            this.collection.each(this.renderModel,this);
            return this;
        },

        renderModel: function (task_model) {         
            var task = new module.ModelView({
                    model: task_model
                });           
            this.$el.find('.' + task_model.get('status')).append(task.render().el);            
        }

    });

})(app.ScrumBoard);