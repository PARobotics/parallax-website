$(document).ready(function(){
  $("#video").attr("width", window.innerWidth * 0.8);
  $("#video").attr("height", window.innerHeight * 0.8);
});

$(window).resize(function() {
  $("#video").attr("width", window.innerWidth * 0.8);
  $("#video").attr("height", window.innerHeight * 0.8);
});

function launchPopup(){
  $("#video").show();
  document.getElementById("video").play();
  $("#videoOverlay").show();
  $("#videoCloseButton").show();
}

function closePopup(){
  $("#video").hide();
  $("#videoOverlay").hide();
  $("#videoCloseButton").hide();
  document.getElementById("video").pause();
}

$(document).keyup(function(e) {
  if(e.keyCode == 27) {
    closePopup();
  }
});
