const WIDTH = 600
const HEIGHT = 800

let titleFont, balls = []

function preload() {
  titleFont = loadFont('fonts/IBMPlexMono-Bold.ttf');
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  balls.push(new Ball(WIDTH / 2, HEIGHT / 2, 200, 15, color(232, 52, 50)))
  balls.push(new Ball(WIDTH / 2, HEIGHT / 2, 60, 5, color(95, 41, 210)))
  balls.push(new Ball(WIDTH / 2, HEIGHT / 2, 100, 2, color(255, 199, 0)))
}

function draw() {
  drawTitle()
}

function drawTitle() {
  push()
  translate(WIDTH / 5 + 30, 30)
  rotate(PI / 2)
  textSize(WIDTH / 5)
  fill(255)
  textFont(titleFont)
  text("LIGHTRICKS", 0, 0)
  text("WORKSHOP**", 0, WIDTH / 5)
  pop()
}

class Ball extends Agent {
  constructor(x, y, size, density, color) {
    super()
    this.position = createVector(x, y)
    this.acceleration = createVector(0, 0)
    this.size = size
    this.density = density
    this.color = color
  }

  step() {
    let mousePosition = createVector(mouseX, mouseY)
    this.acceleration
      .add(mousePosition.sub(this.position).mult(0.3)).mult(1 / this.density)
    this.position.add(this.acceleration)

    strokeWeight(0)
    fill(this.color)
    ellipse(this.position.x, this.position.y, this.size)
  }
}
