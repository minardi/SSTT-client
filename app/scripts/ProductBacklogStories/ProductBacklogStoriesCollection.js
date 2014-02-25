/* ProductBacklogStories */

(function(module) {

    module.Collection = Backbone.Collection.extend({
        model: module.Model,

        //url: "stories",

        initialize: function(id) {
		  this.url = "projects/" + id + "/stories";
		  this.fetch();
		   }

    });

})(app.ProductBacklogStories);