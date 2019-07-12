"use strict";
console.log("JS CONNECTED");

let pixelPainter = document.querySelector("#pixelPainter");
function canvasGrid(height, width = height) {
  for (let i = 0; i < height; i++) {
    let row = document.createElement("div");
    row.id = "row" + [i];
    for (let j = 0; j < width; j++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      row.appendChild(pixel);
    }
    pixelPainter.appendChild(row);
  }
  return pixelPainter;
}
canvasGrid(15);

let mouseDown = false;
let pixels = document.querySelectorAll(".pixel");
let color = document.querySelector("#color").value;
for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener("mousedown", function() {
    this.style.backgroundColor = color;
    mouseDown = true;
  });
  pixels[i].addEventListener("mouseover", function() {
    if (mouseDown === true);
    this.style.backgroundColor = color;
  });
  pixels[i].addEventListener("mouseup", function() {
    mouseDown = false;
  });
}

let menu = document.querySelector("#menu");
let clear = document.createElement("button");
clear.innerHTML = "Clear";
menu.appendChild(clear);

clear.addEventListener("click", function() {
  canvasGrid();
});
