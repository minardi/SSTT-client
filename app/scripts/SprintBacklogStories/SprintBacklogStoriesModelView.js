/* SprintBacklogStories */

;(function(module) {
        
    module.ModelView = Backbone.View.extend({        

        tagName: "div",
        className: "story-box",
    
        template: JST['app/scripts/SprintBacklogStories/SprintBacklogStoriesTpl.ejs'],        
        
        initialize: function() {
        },

        render: function() {
            this.$el.html(this.template({model:this.model.toJSON()}));
            return this;
        }

    })
    
})(app.SprintBacklogStories);
