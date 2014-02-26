/* ScrumBoard */

(function (module) {

    module.CollectionView = Backbone.View.extend({

        template: JST['app/scripts/ScrumBoard/ScrumBoardCollectionTpl.ejs'],
    
        
        initialize: function () {  
            this.collection = new module.Collection();     
        },       
        

        subscriptions: {
            'ScrumPage:ScrumBoardSelected': 'init'
        },  

        init: function(content_el) {            
            this.collection.fetch();            
            this.setElement(content_el);
            this.$el.html(this.template());          
            this.listenTo(this.collection, 'sync', this.render);              
        },

        render: function () {            
            this.collection.each(this.renderModel,this);
            return this;
        },

        renderModel: function (task_model) {            
            var task = new module.ModelView({
                    model: task_model
            });
            this.$el.find('.' + task_model.get('status')).html(task.render().el);            
        }

    });

})(app.ScrumBoard);