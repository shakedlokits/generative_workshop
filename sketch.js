const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

let titleColor;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(255, 207, 0)
  rectMode(CENTER)

  fill(232, 52, 50)
}

function draw() {
  stroke(0)
  strokeWeight(0)
  let size = random() * 20
  ellipse(mouseX, mouseY, size, size)

  textSize(50)
  text("LIGHTRICKSS!$@$#%", 100, 100)
}

function mouseClicked() {
  fill(
    random() * 255,
    random() * 255,
    random() * 255)
}
