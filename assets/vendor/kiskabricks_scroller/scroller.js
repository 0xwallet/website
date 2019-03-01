// * ———————————————————————————————————————————————————————— * //
// * 	scroller
// *	listens to scroll event
// * ———————————————————————————————————————————————————————— * //
define(
	['jquery'],
	function($) {

		var scroller = function(){};

		// least scroll in pixel to be detected
		var SCROLL_THRESHOLD = 1

		// delta time throttling
		var TIME_THRESHOLD = 10

		// helper variables
		var lastPosition = -1
		var timeout = false

		// detect request animation frame
		// taken from https://gist.github.com/Warry/4254579
		var scroll_event = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// IE Fallback, you can even fallback to onscroll
			function(callback){ window.setTimeout(callback, 1000 / 60) }

		// initiation - gets called just once
		scroller.init = function() {
			loop()
		}

		function loop(){

			var top = window.pageYOffset;
			var movement = lastPosition - window.pageYOffset

			if (Math.abs(movement) < SCROLL_THRESHOLD) {
				if(!timeout) {
					timeout = setTimeout(function() {
						scroll_event(loop)
						timeout = false
					}, TIME_THRESHOLD)
				}
				return false
			} else {
				lastPosition = window.pageYOffset
			}

			// scroll event
			for(s in scroll) {
				// * ———————————————————————————————————————————————————————— * //
				// * 	scroll
				// * ———————————————————————————————————————————————————————— * //
				scroll[s](window.pageYOffset)
			}

			// scroll up/down events
			if(movement > 0) {
				for(s in scroll_up) {
				// * ———————————————————————————————————————————————————————— * //
				// * 	scroll up
				// * ———————————————————————————————————————————————————————— * //
					scroll_up[s](window.pageYOffset)
				}
			} else {
				for(s in scroll_down) {
					// * ———————————————————————————————————————————————————————— * //
				// * 	scroll down
				// * ———————————————————————————————————————————————————————— * //
					scroll_down[s](window.pageYOffset)
				}
			}

			// * ———————————————————————————————————————————————————————— * //
			// * 	scroll above
			// * ———————————————————————————————————————————————————————— * //
			for(s in scroll_above) {
				if($(scroll_above[s].element).position().top > window.pageYOffset && movement > 0) {
					scroll_above[s].action(window.pageYOffset)
				}
			}

			// * ———————————————————————————————————————————————————————— * //
			// * 	scroll below
			// * ———————————————————————————————————————————————————————— * //
			for(s in scroll_below) {
				var element = $(scroll_below[s].element)
				if(element.position().top + element.height() < window.pageYOffset && movement < 0) {
					scroll_below[s].action(window.pageYOffset)
				}
			}

			// Recall the loop
			scroll_event(loop)
		}


		var scroll = []
		var scroll_up = []
		var scroll_down = []
		var scroll_above = []
		var scroll_below = []

		// registers scroll up event
		scroller.scroll = function(action) {
			scroll.push(action)
		}

		// registers scroll up event
		scroller.scroll_up = function(action) {
			scroll_up.push(action)
		}

		// registers scroll up event
		scroller.scroll_down = function(action) {
			scroll_down.push(action)
		}

		// registers scroll up event
		scroller.scroll_above = function(element, action) {
			scroll_above.push({element: element, action: action})
		}

		// registers scroll up event
		scroller.scroll_below = function(element, action) {
			scroll_below.push({element: element, action: action})
		}

		return scroller;
	}
);