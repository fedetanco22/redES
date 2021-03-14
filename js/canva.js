var x = 300,
  y = 265,
  radius = 210,
  // 0deg   - 1.5 * Pi,
  // 90deg  - 0   * Pi,
  // 180deg - 0.5 * Pi,
  // 270deg - 1   * Pi
  angleStart = 1.538 * Math.PI,
  angleEnd = -2.055 * Math.PI;

var canvas = document.getElementById("circle");
var context = canvas.getContext("2d");

var gradient = context.createLinearGradient(350, 200, 20, 350, 100, 200);
gradient.addColorStop(0, " #FE9153");
gradient.addColorStop(0, "#FE413F");

context.beginPath();
context.arc(x, y, radius, angleStart, angleEnd);
context.lineWidth = 1;
context.strokeStyle = gradient;
context.stroke();

var Start = 5.057 * Math.PI,
  End = 1.462 * Math.PI;

var contextLeft = canvas.getContext("2d");
contextLeft.beginPath();
contextLeft.arc(x, y, radius, Start, End);
contextLeft.stroke();
