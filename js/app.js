/*
 * This is the main app  responsible for all the wiring and magic!
 */
define([	'models/JobList', 
			'views/job/JobList'], function(JobListing, JobsView){
	
	var init = function(params){
		console.log("Initialize app");

		//declare all models
		var jobs = new JobListing(); 

		//declare all views
		var jobsView = new JobsView();

		//bind all
		jobs.bind("all", $.proxy(jobsView.render, jobsView));


		/*TEST DATA*/
		jobs.add({
			title: "Wanted Wordpress Developer",
			company: "HeadStart Solutions",
			description: "Great startup looking for top knotch Wordpress developer for 3 month contract",
			contact: "sue.varty@headstartsol.com",
			paidRank: "free"
		});
		jobs.add({
			title: "Super Java and Android Developer",
			company: "XtremeLabs",
			description: "Mobile dev show downtown Toronto, great location, great office, super people looking for an awesome developer to lead Android projects",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "premium"
		});
		jobs.add({
			title: "Account Manager",
			company: "XtremeLabs",
			description: "This tight knit group of 40 or so employees regularly enjoys scheduled bowling nights, poker tournaments, softball games, and after work drinks at one of the many bars or boutique coffee shops nearby.  You'll also get to take advantage of a fully stocked beverage fridge and espresso machine.In this position, the successful candidate will play an integral role in the Account Management department with an emphasis on growing revenue with existing clients. Existing knowledge of corporate and financial transactions is preferred. This position reports directly to the VP Sales.",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "premium"
		});
		jobs.add({
			title: "UI / UX Designer",
			company: "ThinkWrap Solutions",
			description: "This company is a Toronto-based software and design firm that develops and implements innovative; leading-edge technologies to produce customized mobile solutions for smart clients. Backed by a leading group of technology and finance executives, we are a young and talented group of engineers and designers working in a creative, fast-paced, fun and eclectic environment. We strive to find smart, authentic, relevant, strategic, and well-executed answers to creative problems.Our portfolio of platforms includes: iOS (iPhone/iPad/iPod Touch), Android, BlackBerry, PlayBook, Windows Phone 7 and more.",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "premium"
		});
		jobs.add({
			title: "Wanted Wordpress Developer",
			company: "HeadStart Solutions",
			description: "Great startup looking for top knotch Wordpress developer for 3 month contract",
			contact: "sue.varty@headstartsol.com",
			paidRank: "basic",
			new: true
		});
		jobs.add({
			title: "Super Java and Android Developer",
			company: "XtremeLabs",
			description: "Mobile dev show downtown Toronto, great location, great office, super people looking for an awesome developer to lead Android projects",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "premium"
		});
		jobs.add({
			title: "Account Manager",
			company: "XtremeLabs",
			description: "This tight knit group of 40 or so employees regularly enjoys scheduled bowling nights, poker tournaments, softball games, and after work drinks at one of the many bars or boutique coffee shops nearby.  You'll also get to take advantage of a fully stocked beverage fridge and espresso machine.In this position, the successful candidate will play an integral role in the Account Management department with an emphasis on growing revenue with existing clients. Existing knowledge of corporate and financial transactions is preferred. This position reports directly to the VP Sales.",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "gold"
		});
		jobs.add({
			title: "UI / UX Designer",
			company: "ThinkWrap Solutions",
			description: "This company is a Toronto-based software and design firm that develops and implements innovative; leading-edge technologies to produce customized mobile solutions for smart clients. Backed by a leading group of technology and finance executives, we are a young and talented group of engineers and designers working in a creative, fast-paced, fun and eclectic environment. We strive to find smart, authentic, relevant, strategic, and well-executed answers to creative problems.Our portfolio of platforms includes: iOS (iPhone/iPad/iPod Touch), Android, BlackBerry, PlayBook, Windows Phone 7 and more.",
			contact: "joe.xtreme@xtremelabs.ca",
			paidRank: "basic",
			new: true
		});


	}

	return { 
		init: init
	};
});