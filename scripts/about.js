function adi_on() {
  document.getElementById("overlay_adi").style.opacity = 1;
  document.getElementById("overlay_adi").style.zIndex = 200;
  document.getElementById("overlay_adi").style.transition = "all 2s";
 
  document.getElementById("adi_head").style.opacity = 1;
  document.getElementById("adi_head").style.transition = "all 2s";
  document.getElementById("adi_head").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("adi_img").style.opacity = 1;
  document.getElementById("adi_img").style.transition = "all 2s";
  document.getElementById("adi_img").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("adi_text").style.opacity = 1;
  document.getElementById("adi_text").style.transition = "all 2s";
  document.getElementById("adi_text").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("adi_bar").style.opacity = 1;
  document.getElementById("adi_bar").style.transition = "all 2s";
  document.getElementById("adi_bar").style.transform = 'translate3d(0, 0, 0)';
}

function adi_off() {
  document.getElementById("overlay_adi").style.opacity = 0;
  document.getElementById("overlay_adi").style.zIndex = 1;
  document.getElementById("overlay_adi").style.transition = "all 2s";

  document.getElementById("adi_head").style.opacity = 0;
  document.getElementById("adi_head").style.transition = "all 2s";
  document.getElementById("adi_head").style.transform = 'translate3d(0, 2000px, 0)';

  document.getElementById("adi_img").style.opacity = 0;
  document.getElementById("adi_img").style.transition = "all 2s";
  document.getElementById("adi_img").style.transform = 'translate3d(2000px, 0, 0)';

  document.getElementById("adi_text").style.opacity = 0;
  document.getElementById("adi_text").style.transition = "all 2s";
  document.getElementById("adi_text").style.transform = 'translate3d(-2000px, 0, 0)';

  document.getElementById("adi_bar").style.opacity = 0;
  document.getElementById("adi_bar").style.transition = "all 2s";
  document.getElementById("adi_bar").style.transform = 'translate3d(0, -2000px, 0)';
  
}

function maja_on() {
  document.getElementById("overlay_maja").style.opacity = 1;
  document.getElementById("overlay_maja").style.zIndex = 200;
  document.getElementById("overlay_maja").style.transition = "all 2s";

  document.getElementById("maja_head").style.opacity = 1;
  document.getElementById("maja_head").style.transition = "all 2s";
  document.getElementById("maja_head").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("maja_img").style.opacity = 1;
  document.getElementById("maja_img").style.transition = "all 2s";
  document.getElementById("maja_img").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("maja_text").style.opacity = 1;
  document.getElementById("maja_text").style.transition = "all 2s";
  document.getElementById("maja_text").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("maja_text1").style.opacity = 1;
  document.getElementById("maja_text1").style.transition = "all 2s";
  document.getElementById("maja_text1").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("maja_bar").style.opacity = 1;
  document.getElementById("maja_bar").style.transition = "all 2s";
  document.getElementById("maja_bar").style.transform = 'translate3d(0, 0, 0)';
}

function maja_off() {
  document.getElementById("overlay_maja").style.opacity = 0;
  document.getElementById("overlay_maja").style.zIndex = 1;
  document.getElementById("overlay_maja").style.transition = "all 2s";

  document.getElementById("maja_head").style.opacity = 0;
  document.getElementById("maja_head").style.transition = "all 2s";
  document.getElementById("maja_head").style.transform = 'translate3d(0, 2000px, 0)';

  document.getElementById("maja_img").style.opacity = 0;
  document.getElementById("maja_img").style.transition = "all 2s";
  document.getElementById("maja_img").style.transform = 'translate3d(0, -2000px, 0)';

  document.getElementById("maja_text").style.opacity = 0;
  document.getElementById("maja_text").style.transition = "all 2s";
  document.getElementById("maja_text").style.transform = 'translate3d(-2000px, 0, 0)';

  document.getElementById("maja_text1").style.opacity = 0;
  document.getElementById("maja_text1").style.transition = "all 2s";
  document.getElementById("maja_text1").style.transform = 'translate3d(2000px, 0, 0)';

  document.getElementById("maja_bar").style.opacity = 0;
  document.getElementById("maja_bar").style.transition = "all 2s";
  document.getElementById("maja_bar").style.transform = 'translate3d(0, 2000px, 0)';
}

function max_on() {
  document.getElementById("overlay_max").style.opacity = 1;
  document.getElementById("overlay_max").style.zIndex = 200;
  document.getElementById("overlay_max").style.transition = "all 2s";

  document.getElementById("max_head").style.opacity = 1;
  document.getElementById("max_head").style.transition = "all 2s";
  document.getElementById("max_head").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("max_img").style.opacity = 1;
  document.getElementById("max_img").style.transition = "all 2s";
  document.getElementById("max_img").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("max_text").style.opacity = 1;
  document.getElementById("max_text").style.transition = "all 2s";
  document.getElementById("max_text").style.transform = 'translate3d(0, 0, 0)';

  document.getElementById("max_bar").style.opacity = 1;
  document.getElementById("max_bar").style.transition = "all 2s";
  document.getElementById("max_bar").style.transform = 'translate3d(0, 0, 0)'
}

function max_off() {
  document.getElementById("overlay_max").style.opacity = 0;
  document.getElementById("overlay_max").style.zIndex = 1;
  document.getElementById("overlay_max").style.transition = "all 2s";

  document.getElementById("max_head").style.opacity = 0;
  document.getElementById("max_head").style.transition = "all 2s";
  document.getElementById("max_head").style.transform = 'translate3d(0, 2000px, 0)';

  document.getElementById("max_img").style.opacity = 0;
  document.getElementById("max_img").style.transition = "all 2s";
  document.getElementById("max_img").style.transform = 'translate3d(-2000px, 0, 0)';

  document.getElementById("max_text").style.opacity = 0;
  document.getElementById("max_text").style.transition = "all 2s";
  document.getElementById("max_text").style.transform = 'translate3d(2000px, 0, 0)';

  document.getElementById("max_bar").style.opacity = 0;
  document.getElementById("max_bar").style.transition = "all 2s";
  document.getElementById("max_bar").style.transform = 'translate3d(0, -2000px, 0)';
}