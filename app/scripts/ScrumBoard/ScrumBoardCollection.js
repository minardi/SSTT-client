/* ScrumBoard */

(function (module) {

    module.Collection = Backbone.Collection.extend({

        model: module.Model,
        
        //url: '',
        
        initialize: function () { 
            Backbone.Mediator.sub("Project:Selected", this.setUrl, this);                    
        },

        setUrl: function (project_id) {
        	this.url = 'tasks/for-project/' + project_id + '.json';
            this.fetch();         	
        }

    });

})(app.ScrumBoard);