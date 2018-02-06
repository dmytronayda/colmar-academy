$(document).ready(function() {
  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  var scene = new ScrollMagic.Scene({
          triggerElement: ".subjects-section",
          duration: 100,    // the scene should last for a scroll distance of 100px
          offset: 50        // start this scene after scrolling for 50px
      })
      subject.remove() // pins the element for the the scene's duration
      .addTo(controller); // assign the scene to the controller
}
