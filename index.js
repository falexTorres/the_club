/** 
*
* controls index.html
*
**/

var divs = ['#homeDiv', '#aboutDiv', '#photosDiv', '#contactDiv'];
var links = ['homeLink', '#aboutLink', '#photosLink', '#contactLink'];
var actives = ['#homeActive', '#aboutActive', '#photosActive', '#contactActive'];
var menuLinks = ['#food1', '#food2', '#food3', '#beer1_1', '#beer1_2', '#beer1_3', '#beer1_4', '#beer1_5', '#beer2_1', '#beer2_2', '#beer2_3', '#beer2_4', '#beer2_5', '#beer3_1', '#beer3_2', '#beer3_3', '#beer3_4', '#beer3_5', '#wine1_1', '#wine1_2', '#wine1_3', '#wine1_4', '#wine1_5', '#wine2_1', '#wine2_2', '#wine2_3', '#wine2_4', '#wine2_5', '#wine3_1', '#wine3_2', '#wine3_3', '#wine3_4', '#wine3_5'];
var menuMap = [];
menuMap["#food1"] = [food1Description, food1Img];
menuMap["#food2"] = [food2Description, food2Img];
menuMap["#food3"] = [food3Description, food3Img];
menuMap["#beer1_1"] = [beer1_1Description, beer1_1Img];
menuMap["#beer1_2"] = [beer1_2Description, beer1_2Img];
menuMap["#beer1_3"] = [beer1_3Description, beer1_3Img];
menuMap["#beer1_4"] = [beer1_4Description, beer1_4Img];
menuMap["#beer1_5"] = [beer1_5Description, beer1_5Img];
menuMap["#beer2_1"] = [beer2_1Description, beer2_1Img];
menuMap["#beer2_2"] = [beer2_2Description, beer2_2Img];
menuMap["#beer2_3"] = [beer2_3Description, beer2_3Img];
menuMap["#beer2_4"] = [beer2_4Description, beer2_4Img];
menuMap["#beer2_5"] = [beer2_5Description, beer2_5Img];
menuMap["#beer3_1"] = [beer3_1Description, beer3_1Img];
menuMap["#beer3_2"] = [beer3_2Description, beer3_2Img];
menuMap["#beer3_3"] = [beer3_3Description, beer3_3Img];
menuMap["#beer3_4"] = [beer3_4Description, beer3_4Img];
menuMap["#beer3_5"] = [beer3_5Description, beer3_5Img];
menuMap["#wine1_1"] = [wine1_1Description, wine1_1Img];
menuMap["#wine1_2"] = [wine1_2Description, wine1_2Img];
menuMap["#wine1_3"] = [wine1_3Description, wine1_3Img];
menuMap["#wine1_4"] = [wine1_4Description, wine1_4Img];
menuMap["#wine1_5"] = [wine1_5Description, wine1_5Img];
menuMap["#wine2_1"] = [wine2_1Description, wine2_1Img];
menuMap["#wine2_2"] = [wine2_2Description, wine2_2Img];
menuMap["#wine2_3"] = [wine2_3Description, wine2_3Img];
menuMap["#wine2_4"] = [wine2_4Description, wine2_4Img];
menuMap["#wine2_5"] = [wine2_5Description, wine2_5Img];
menuMap["#wine3_1"] = [wine3_1Description, wine3_1Img];
menuMap["#wine3_2"] = [wine3_2Description, wine3_2Img];
menuMap["#wine3_3"] = [wine3_3Description, wine3_3Img];
menuMap["#wine3_4"] = [wine3_4Description, wine3_4Img];
menuMap["#wine3_5"] = [wine3_5Description, wine3_5Img];

function showBeerMenu() {
	$('#food-nav-bar').hide();
	$('#beer-wine-nav-bar').show();
	/*$('#beerImg').hide();
	$('#foodImg').hide();
	$('#wineImg').show();
	$('#beerDescription').hide();
	$('#foodDescription').hide();
	$('#wineDescription').show();*/
	$('#wineButton').click();
}


function showFoodMenu() {
	$('#beer-wine-nav-bar').hide();
	$('#food-nav-bar').show();
	$('#beerImg').hide();
	$('#wineImg').hide();
	$('#foodImg').show();
	$('#beerDescription').hide();
	$('#wineDescription').hide();
	$('#foodDescription').show();
}


jQuery(document).ready(function() {
	
	/* INITIALIZATIONS */
	
	$('.slider').slider();
	
	$('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
	
	for (var i = 0; i < links.length; i++) {
		$(divs[i]).hide();
		$(actives[i]).attr('class', 'col l3 m3 nav-button');
	}
	
	$(divs[0]).show();
	$(actives[0]).attr('class', 'col l3 m3 nav-button active nav-active');
	
	/* END OF INITIALIZATIONS */
	
	
	
	/* START OF PAGE NAVIGATION FUNCTIONALITY */
	
	$('a.' + links[0]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[0]).show();
		$(actives[0]).attr('class', 'col l3 m3 nav-button active nav-active');
	})	
	
	$(links[1]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[1]).show();
		$(actives[1]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	$(links[2]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[2]).show();
		$(actives[2]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	$(links[3]).click(function() {
		for (var i = 0; i < links.length; i++) {
			$(divs[i]).hide();
			$(actives[i]).attr('class', 'col l3 m3 nav-button');
		}
		$('body.fade-in').attr('class', '');
		$('body').attr('class', 'fade-in');
		$(divs[3]).show();
		$(actives[3]).attr('class', 'col l3 m3 nav-button active nav-active');
	})
	
	/* END OF PAGE NAVIGATION FUNCTIONALITY */
	
	
	
	/* START OF MENU PAGE FUNCTIONALITY HIDE/SHOW FUNCTIONALITY */
	
	$('.menu-top').click(function() {
		console.log($(this).attr('id') == 'menuTopFood');
		console.log($(this).attr('id'));
		
		if ($(this).attr('id') == 'menuTopBeer') {
			$(this).attr('class', 'menu-active-top waves-effect waves-red btn orange lighten-5 red-text');
			$('#menuTopFood').attr('class', 'menu-top waves-effect waves-red btn orange lighten-5 black-text');
			showBeerMenu();
		}
		else {
			$(this).attr('class', 'menu-active-top waves-effect waves-red btn orange lighten-5 red-text');
			$('#menuTopBeer').attr('class', 'menu-top waves-effect waves-red btn orange lighten-5 black-text');
			showFoodMenu();
		}
	})
	
	$('table.highlight > tbody > tr').click(function() {
		console.log($(this));
		for (var i = 0; i < menuLinks.length; i++) {
			$(menuLinks[i]).attr('class', '');
		}
		$(this).attr('class','active-menu-select');
		var id = $(this).attr('id');
		var title = $(this).html();
		var description = menuMap['#' + id][0];
		var img = menuMap['#' + id][1]
		//show description 
		console.log('title: ' + $(this).html());
		console.log('description: ' + description);
		console.log('img: ' + img);
		
	})
	
	$('#beerButton').click(function() {	
		$('#wineButton').attr('class', 'btn light-blue lighten-5 black-text');
		$(this).attr('class', 'btn light-blue lighten-5 red-text');
		$('#wine-nav-bars').hide();
		$('#beer-nav-bars').show();	
		$('#beer1_1').attr('class', 'active-menu-select');	
		$('#wineImg').hide();
		$('#foodImg').hide();
		$('#beerImg').show();
		$('#wineDescription').hide();
		$('#foodDescription').hide();
		$('#beerDescription').show();
		
		//show beers
	})
	
	$('#wineButton').click(function() {
		$('#beerButton').attr('class', 'btn light-blue lighten-5 black-text');
		$(this).attr('class', 'btn light-blue lighten-5 red-text');
		$('#beer-nav-bars').hide();
		$('#wine-nav-bars').show();
		$('#wine1_1').attr('class', 'active-menu-select');
		$('#beerImg').hide();
		$('#foodImg').hide();
		$('#wineImg').show();
		$('#beerDescription').hide();
		$('#foodDescription').hide();
		$('#wineDescription').show();

		//show wines
	})
	
	/* END OF MENU PAGE FUNCTIONALITY HIDE/SHOW FUNCTIONALITY */
	
	
})
