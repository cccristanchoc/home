var up, down, img;

function preload() {
  up = loadImage('images/face-up.png');
  down = loadImage('images/face-down.png');
  img=down;
}

function setup() {
  var canvas = createCanvas(img.width/2,img.height/2);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');
  fill(0,250,0);
}

var value = 0;

function draw() {
  background(255);
  image(img, 0, 0, img.width/2, img.height/2);
  // image(img, 0, height/2, img.width/2, img.height/2);
}

function mouseClicked() {
  if (img == down) {
    img = up;
  } else {
    img = down;
  }
}
