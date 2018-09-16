// function setup() {
//   var cnvs = createCanvas(480, 260);
//
//   // Move the canvas so it’s inside our <div id="sketch-holder">.
//   cnvs.parent('skmo');
// }
//
// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }

// save this file as sketch.js
// Sketch One
var s = function( p ) { // p could be any variable name
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};
var myp5 = new p5(s, 'skmo');

// Sketch Two
var t = function( p ) {
  var x = 100.0;
  var y = 100;
  var speed = 2.5;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed;
    if(x > p.width){
      x = 0;
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'sk-test');
