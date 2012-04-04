/* jQuery Tiny Pub/Sub - v0.7 - 10/27/2011

 * http://benalman.com/
 * Copyright (c) 2011 "Cowboy" Ben Alman; Licensed MIT, GPL 
 * 
 * 
 * Nael El Shawwa modifications Feb 23 2012
 * 
 * added connect and disconnect which allow you to listen to function calls
 * on objects like dojo.connect and dojo.disconnect
 * 
 * usage is:
 * $.connect(object, function, callbackFunction, callbackObject)
 * so call callbackObject.callbackFunction() everytime object.function() is called
 * 
 * */

(function($) {

  var o = $({});

  $.subscribe = function() {
    o.on.apply(o, arguments);
  };

  $.unsubscribe = function() {
    o.off.apply(o, arguments);
  };

  $.publish = function() {
    o.trigger.apply(o, arguments);
  };
  
  $.connect = function(listenTarget, fnTarget, notificationCb, notificationObj){
	  

	 listenTarget[fnTarget] = function(){
		 $.proxy(notificationCb, notificationObj);
		 listenTarget[fnTarget](arguments);
	 };
	 
	 return {
		 disconnect: function(){
			 listenTarget[fnTarget] = listenTarget
		 }
	 };
  };
  
  $.disconnect = function(){
	  
  };

}(jQuery));