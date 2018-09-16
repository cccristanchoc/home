var img;
function preload() {
  var canvas = createCanvas(245, 489);
  img = loadImage('images/face-up.png');

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');
}

function setup() {
  image(img, 0, 0);
  image(img, 0, height/2, img.width/2, img.height/2);
}
