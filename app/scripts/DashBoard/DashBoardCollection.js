/* DashBoard */

(function(module) {

    module.Collection = Backbone.Collection.extend({

    	initialize: function() {
    		/*
			this.add(<%= %>)
    		*/

    		this.add([
                {
                    content: "Back",
                    glyph: "glyphicon glyphicon-arrow-left",
                    permition: {
                        "must_be": "",
                        "not": {
                            page: ["project_page", "team_edit_page"]
                        }
                    }
                },

                {
                    content: "BackFromTeamEditPage", 
                    glyph: "glyphicon glyphicon-arrow-left",
                    permition: {
                        "must_be": {
                            page: ["team_edit_page"]
                        },
                        "not": ""
                    }
                },

                {
                    content: "Team",
                    permition: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": {
                            page: ["team_page", "team_edit_page"]
                        }
                    }
                },

                {
                    content: "Configure",
                    glyph: "glyphicon glyphicon-arrow-cog",
                    permition: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": ""
                    }
                },

                {
                    content: "Delete",
                    glyph: "glyphicon glyphicon-arrow-remove",
                    permition: {
                        "must_be": {
                            right: ["pm"]
                        },
                        "not": ""
                    }
                } 
            ])
		},

        model: module.Model,

    });

})(app.DashBoard);