/* Teams */

(function(module) {

    module.Collection = Backbone.Collection.extend({

        model: module.Model,

        initialize: function() {
            this.url = "stories/for-projects/1"
            //this.url = "team/for-project/" + Id
        }

    });

})(app.Teams);

