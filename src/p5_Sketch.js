function setup() {
  var canvas = createCanvas(747/2, 747/2);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch');
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
