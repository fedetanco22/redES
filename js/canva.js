var x = 300,
  y = 265,
  radius = 210,
  // 0deg   - 1.5 * Pi,
  // 90deg  - 0   * Pi,
  // 180deg - 0.5 * Pi,
  // 270deg - 1   * Pi
  angleStart = 1.538 * Math.PI,
  angleEnd = -2.055 * Math.PI;
var canvas = document.getElementById("mipanel");
var context = canvas.getContext("2d");
context.beginPath();
context.arc(x, y, radius, angleStart, angleEnd);
context.strokeStyle = "red";
context.strokeStyle = "center";
context.stroke();

// var canvas = document.getElementById("circle");
// var ctx = canvas.getContext("2d");

//

// //Create gradient
// var gradient = ctx.createLinearGradient(0, 500, 0, 0);
// gradient.addColorStop(0, "#c0e674");
// gradient.addColorStop(1, "#40d6a5");

// //Draw circle
// ctx.beginPath();
// ctx.arc(x, x, radius, 0, 2 * Math.PI, false);
// ctx.lineWidth = 30;
// ctx.strokeStyle = "rgba(255,255,255, 0.2)";
// ctx.stroke();

// //Draw arc
// ctx.beginPath();
// ctx.arc(x, y, radius, angleStart, angleEnd);
// ctx.strokeStyle = gradient;
// ctx.lineWidth = 30;
// ctx.lineCap = "round";
// ctx.stroke();
