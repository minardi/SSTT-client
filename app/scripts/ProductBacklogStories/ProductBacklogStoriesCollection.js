/* ProductBacklogStories */

(function(module) {

    module.Collection = Backbone.Collection.extend({
        
        model: module.Model,

        initialize: function(project_id) {
            this.url = "projects/" + project_id + "/stories";
            //изменить руты
            this.fetch();
        }

    });

})(app.ProductBacklogStories);