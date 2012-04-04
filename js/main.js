/*
 * Main loaders for our application. Common framework libraries and components will get loaded here
 * app.js will contain our main application controller logic and can load additional components that are application
 * specific ex. Google Maps since its not part of the framework itself but is an application specific library
 */
require.config({
	baseUrl: 'js',
	paths:{
		jquery: 'libs/jquery',
		serialize: 'libs/jquery.serialize',
		pubsub: 'libs/jquery.pubsub',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		text: 'libs/text',
		order: 'libs/order'
	},
	priority: ['jquery', 'underscore','text', 'backbone']
}); 

require(
		[
		 'app',
		 'text',
		 'underscore',
		 'jquery',
		 'serialize',
		 'pubsub',
		 'backbone',
		 ], function(App){
			
			
			//{{name}} to i variables
			//<@ to 
			_.templateSettings = {
					  interpolate : /\{\{(.+?)\}\}/g,
					  evaluate: /\<\@(.+?)\@\>/g
			};
			
			
			App.init();
		}
);
