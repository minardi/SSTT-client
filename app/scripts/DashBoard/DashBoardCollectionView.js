/* DashBoard */

(function(module, sstt) {
        
    module.CollectionView = Backbone.View.extend({

        project: {},

        current_page: "project_page",

        template: JST["app/scripts/DashBoard/DashBoardCollectionTpl.ejs"],
        
        initialize: function() {
            this.collection = new module.Collection();
            this.collection.add([
                {
                    content: "Back", 
                    provision: {
                        "must_be": "",
                        "not": {
                            page: "project_page"
                        }
                    }
                },

                {
                    content: "Team",
                    provision: {
                        "must_be": {
                            right: "pm"
                        },
                        "not": {
                            page: "team_page"
                        }
                    }
                },

                {
                    content: "Configure",
                    provision: {
                        "must_be": {
                            right: "pm"
                        },
                        "not": ""                    
                    }
                },

                {
                    content: "Delete",
                    provision: {
                        "must_be": {
                            right: "pm"
                        },
                        "not": ""                    
                    }
                } 
            ])
        },

        subscriptions: {
            "Project:Checked": "setProject",
            "Button:Click:Back": "toProjectPage",
            "Project:Selected": "toScrumPage",
            "Button:Click:Team": "toTeamPage"
        },

        toProjectPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "project_page";
            this.render();
        },

        toScrumPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "scrum_page";
            this.render();
        },

        toTeamPage: function() {
            this.$el.find(".dashboard").remove();
            this.current_page = "team_page";
            this.render();
        },

        setProject: function(project) {
            this.$el.find(".dashboard").remove();
            this.project = project;
            this.render();
        },

        render: function(project) {
            this.current_right = (this.project.get("pm").user_id == sstt.user.getId())? "pm": "not_pm";
            this.$el.append(this.template);
            this.collection.each(this.renderOne, this);
            return this;
        },

        renderOne: function (button_model) {
            button_model.set("project_id", this.project.id);
            if (this.canRender(button_model.get("provision"))) {
                var button = new module.ModelView({
                        model: button_model
                    });

                this.$el.find(".dashboard").append(button.render().el);
            };
        },

        canRender: function (provision) {
            var answer;

            if(provision.must_be) {
                if (this.current_right === provision.must_be.right) {
                    answer = true;
                } else {
                    return false;
                }
            } else {
                answer = true;
            }

            if (provision.not) {
                if(this.current_page === provision.not.page) {
                    answer = false;
                }
            } else {
                answer = true;
            }

            return answer;
        },

    });

})(app.DashBoard, sstt);

