/** 
*
* controls index.html
*
**/

var divs = ['#homeDiv', '#aboutDiv', '#photosDiv', '#contactDiv'];
var links = ['homeLink', '#aboutLink', '#photosLink', '#contactLink'];
var actives = ['#homeActive', '#aboutActive', '#photosActive', '#contactActive'];
var menuLinks = ['#food1', '#food2', '#food3', '#beer1', '#beer2', '#beer3', '#wine1', '#wine2', '#wine3'];

function showBeerMenu() {
	
}


function showFoodMenu() {
	
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
			$(this).attr('class', 'menu-active-top');
			$('#menuTopFood').attr('class', '');
			showFoodMenu();
		}
		else {
			$(this).attr('class', 'menu-active-top');
			$('#menuTopBeer').attr('class', '');
			showBeerMenu();
		}
	})
	
	$('table.highlight > tbody > tr').click(function() {
		console.log($(this));
		for (var i = 0; i < menuLinks.length; i++) {
			$(menuLinks[i]).attr('class', '');
		}
		$(this).attr('class','active-menu-select');
		
		//show description 
		
	})
	
	/* END OF MENU PAGE FUNCTIONALITY HIDE/SHOW FUNCTIONALITY */
	
	
})
