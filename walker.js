const WIDTH = 600
const HEIGHT = 800

const G = 0.05
const PERL_COF = 0.02
const NUM_WALKERS = 150
const MAG_LIMIT = 3
const LINE_OPACITY = 70

function preload() {
  titleFont = loadFont('fonts/IBMPlexMono-Bold.ttf');
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  walkers = NUM_WALKERS
  while (walkers--)
    new Walker(random(0, WIDTH), random(0, HEIGHT))
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
  strokeWeight(0)
  textFont(titleFont)
  text("LIGHTRICKS", 0, 0)
  text("WORKSHOP**", 0, WIDTH / 5)
  pop()
}

class Walker extends Agent {
  constructor(x, y) {
    super()
    this.velocity = createVector()
    this.prevPosition = createVector(x, y)
    this.position = this.prevPosition.copy()
    this.screenSkip = false
    this.color = color(0, LINE_OPACITY)
  }

  step() {
    let perlinForce = p5.Vector.fromAngle(radians(
      map(noise(this.position.x * PERL_COF, this.position.y * PERL_COF), 0, 1, 0, 360)
    ), G)

    this.velocity.add(perlinForce).limit(MAG_LIMIT)
    this.prevPosition = this.position.copy()
    this.position.add(this.velocity)

    if(this.position.x > WIDTH) {this.position.x = 0; this.screenSkip = true}
    if(this.position.y > HEIGHT) {this.position.y = 0; this.screenSkip = true}
    if(this.position.x < 0) {this.position.x = WIDTH; this.screenSkip = true}
    if(this.position.y < 0) {this.position.y = HEIGHT; this.screenSkip = true}

    this.render()
  }

  render() {
    stroke(this.color)
    strokeWeight(1)

    if(!this.screenSkip){
      curveBetween(
        this.prevPosition.x, this.prevPosition.y,
        this.position.x, this.position.y,
        0, 0, 0
      )
    } else this.screenSkip = false
  }
}
