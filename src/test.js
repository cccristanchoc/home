var distances = [];
var maxDistance;
var spacer;

function setup() {
  var cn = createCanvas(480, 260);
  cn.parent('sk-test');
  maxDistance = dist(width/2, height/2, width, height);
  for (var x = 0; x < width; x++) {
    distances[x] = []; // Crear un arreglo anidado
    for (var y = 0; y < height; y++) {
      var distance = dist(width/2, height/2, x, y);
      distances[x][y] = distance/maxDistance * 255;
    }
  }
  spacer = 10;
  noLoop();  // Correr draw() una vez y luego parar
}

function draw() {
  background(0);
  // Este loop anidado recorre los valores en los arreglos basado
  // en la variable spacer, así que hay más valores en el arreglo
  // que los que dibujamos. Cambia el valor de la variable spacer
  // para cambiar la densidad de los puntos.
  for (var x = 0; x < width; x += spacer) {
    for (var y = 0; y < height; y += spacer) {
      stroke(distances[x][y]);
      point(x + spacer/2, y + spacer/2);
    }
  }
}
