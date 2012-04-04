define([
  'models/Job'
], function(Job){
  
  var JobList = Backbone.Collection.extend({
    model: Job,
    initialize: function(){

    }

  });
 
  return JobList;
});