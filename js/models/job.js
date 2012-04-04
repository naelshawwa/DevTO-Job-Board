define([], function() {

  var Job = Backbone.Model.extend({
    initialize: function(){

    	this.on("change:[paidRank]", this.calculateCardSize);
    	this.calculateCardSize();
    },
    calculateCardSize: function(){
    	switch(this.get("paidRank")){
    		case "free":
    			this.set("cardSize", 2);
                this.set("cardColor", "");
    		break;
    		case "basic":
    			this.set("cardSize", 3);
                this.set("cardColor", "alert alert-block");
    		break;
    		case "premium":
    			this.set("cardSize", 4);
                this.set("cardColor", "alert-success");
    		break;
    		case "gold":
    			this.set("cardSize", 5);
                this.set("cardColor", "alert-info");
    		break;
            default:
                this.set("cardSize",2);
            break;
    	}
    }
    
  });
  return Job;

});