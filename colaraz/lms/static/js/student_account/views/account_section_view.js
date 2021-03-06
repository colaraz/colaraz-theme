/* eslint-disable */
(function(define, undefined) {
    'use strict';
    define([
        'gettext',
        'jquery',
        'underscore',
        'backbone',
        'edx-ui-toolkit/js/utils/html-utils',
    ], function(gettext, $, _, Backbone, HtmlUtils) {
        var AccountSectionView = Backbone.View.extend({

            tpl: '#account_settings_section-tpl',

            initialize: function(options) {
                this.options = options;
                this.tpl = $(this.tpl).html();
                _.bindAll(this, 'render', 'renderFields');
            },

            render: function() {

                this.$el.html(_.template(this.tpl)({
                    HtmlUtils: HtmlUtils,
                    sections: this.options.sections,
                    tabName: this.options.tabName,
                    tabLabel: this.options.tabLabel
                }));

                this.renderFields();
            },

            renderFields: function() {
                var view = this;

                _.each(view.$('.' + view.options.tabName + '-section-body'), function(sectionEl, index) {
                    _.each(view.options.sections[index].fields, function(field) {
                        $(sectionEl).append(field.view.render().el);
                    });
                });
                return this;
            }
        });

        return AccountSectionView;
    });
}).call(this, define || RequireJS.define);
