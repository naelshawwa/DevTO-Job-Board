define([
	'text!templates/job/JobList.html'
	], function (JobListTemplate){

		var JobCardView = Backbone.View.extend({
			el	: $("#app"),
			initialize: function(){

				console.log("JobCardView Init");
				console.log(this);
				

			},
			events: {

			},
			render: function(event, model, collection){
				console.log("Render JobList");
				console.log(collection);
				var compiledTemplate = _.template(JobListTemplate, collection );
     			$(this.el).html( compiledTemplate ); 
			}
		});

		return JobCardView;
	})