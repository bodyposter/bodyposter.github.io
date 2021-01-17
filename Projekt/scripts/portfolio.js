function card1_on() {
  document.getElementById("cards1").style.opacity = 1;
  document.getElementById("cards1").style.zIndex = 220;
  document.getElementById("cards1").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper1').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper1').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper1').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper1').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper1').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card1_off() {
  document.getElementById("cards1").style.opacity = 0;
  document.getElementById("cards1").style.zIndex = 1;
  document.getElementById("cards1").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card2_on() {
  document.getElementById("cards2").style.opacity = 1;
  document.getElementById("cards2").style.zIndex = 220;
  document.getElementById("cards2").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper2').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper2').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper2').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper2').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper2').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card2_off() {
  document.getElementById("cards2").style.opacity = 0;
  document.getElementById("cards2").style.zIndex = 1;
  document.getElementById("cards2").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card3_on() {
  document.getElementById("cards3").style.opacity = 1;
  document.getElementById("cards3").style.zIndex = 220;
  document.getElementById("cards3").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper3').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper3').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper3').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper3').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper3').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card3_off() {
  document.getElementById("cards3").style.opacity = 0;
  document.getElementById("cards3").style.zIndex = 1;
  document.getElementById("cards3").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card4_on() {
  document.getElementById("cards4").style.opacity = 1;
  document.getElementById("cards4").style.zIndex = 220;
  document.getElementById("cards4").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper4').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper4').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper4').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper4').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper4').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card4_off() {
  document.getElementById("cards4").style.opacity = 0;
  document.getElementById("cards4").style.zIndex = 1;
  document.getElementById("cards4").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card5_on() {
  document.getElementById("cards5").style.opacity = 1;
  document.getElementById("cards5").style.zIndex = 220;
  document.getElementById("cards5").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper5').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper5').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper5').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper5').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper5').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card5_off() {
  document.getElementById("cards5").style.opacity = 0;
  document.getElementById("cards5").style.zIndex = 1;
  document.getElementById("cards5").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card6_on() {
  document.getElementById("cards6").style.opacity = 1;
  document.getElementById("cards6").style.zIndex = 220;
  document.getElementById("cards6").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper6').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper6').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper6').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper6').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper6').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card6_off() {
  document.getElementById("cards6").style.opacity = 0;
  document.getElementById("cards6").style.zIndex = 1;
  document.getElementById("cards6").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card7_on() {
  document.getElementById("cards7").style.opacity = 1;
  document.getElementById("cards7").style.zIndex = 220;
  document.getElementById("cards7").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper7').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper7').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper7').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper7').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper7').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card7_off() {
  document.getElementById("cards7").style.opacity = 0;
  document.getElementById("cards7").style.zIndex = 1;
  document.getElementById("cards7").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}

function card8_on() {
  document.getElementById("cards8").style.opacity = 1;
  document.getElementById("cards8").style.zIndex = 220;
  document.getElementById("cards8").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 1;
  document.getElementById("content2").style.opacity = 0;
  document.getElementById("content2").style.zIndex = 0;
  document.getElementById("content2").style.transition = "all 2s";

  		(function() {
		    function scrollHorizontally(e) {
		        e = window.event || e;
		        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		        document.getElementById('scrolling-wrapper8').scrollLeft -= (delta * 40); // Multiplied by 40
		        e.preventDefault();
		    }
		    if (document.getElementById('scrolling-wrapper8').addEventListener) {
		        // IE9, Chrome, Safari, Opera
		        document.getElementById('scrolling-wrapper8').addEventListener('mousewheel', scrollHorizontally, false);
		        // Firefox
		        document.getElementById('scrolling-wrapper8').addEventListener('DOMMouseScroll', scrollHorizontally, false);
		    } else {
		        // IE 6/7/8
		        document.getElementById('scrolling-wrapper8').attachEvent('onmousewheel', scrollHorizontally);
		    }
		})();
}

function card8_off() {
  document.getElementById("cards8").style.opacity = 0;
  document.getElementById("cards8").style.zIndex = 1;
  document.getElementById("cards8").style.transition = "all 2s";
  document.getElementById("close_btn").style.opacity = 0;
  document.getElementById("content2").style.opacity = 1;
  document.getElementById("content2").style.zIndex = 10;
  document.getElementById("content2").style.transition = "all 2s";
}