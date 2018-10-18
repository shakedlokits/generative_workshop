const WIDTH = window.innerHeight / 1.5
const HEIGHT = window.innerHeight
let regularFont;

function preload() {
  regularFont = loadFont('fonts/IBMPlexMono-Bold.ttf');
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(255)
  drawClock(WIDTH / 2, HEIGHT / 2)
  push()
  translate(20, 0)
  renderTitle('ligktrichs', {
    w: (WIDTH / 2) - 20 * 2,
    h: HEIGHT - 20 * 2,
    margin: 20
  })
  pop()
  push()
  translate(WIDTH / 2, 0)
  renderTitle('whrp*sook*', {
    w: (WIDTH / 2) - 20 * 2,
    h: HEIGHT - 20 * 2,
    margin: 20
  })
  pop()
}

function drawClock(x, y) {
  drawClockHand(x, y,
    map(moment().second() * 1000 + moment().millisecond(), 0, 60000, 0, 360))
  drawClockHand(x, y, map(moment().minute(), 0, 60, 0, 360))
  drawClockHand(x, y, map(moment().hour(), 0, 60, 0, 360))
}

function drawClockHand(x, y, rotation) {
  push()
  translate(x, y)
  rotate((PI / 180) * rotation)
  scale(10)
  let fader = (1 - noise((millis() * 0.0001)))
  let a = color(
    230,
    fader * 1 * 255,
    fader * 2 * 255,
    fader * 200
  )
  stroke(a)
  strokeWeight(5);
  noFill();
  push()
  translate(-15, -37.5)
  beginShape();
  curveVertex(15, 50);
  curveVertex(0, 37.5);
  curveVertex(10, 0);
  curveVertex(20, 0);
  curveVertex(30, 37.5);
  curveVertex(15, 50);
  curveVertex(0, 37.5);
  curveVertex(10, 0);
  endShape();
  pop()
  pop()
}

function renderTitle(string, typographyArea) {
  string.split('').map((letter, index) => {
    let fader = (1 - noise((millis() * 0.0001) * (index + 1)))
    let position = createVector(
      (index % 2) * (typographyArea.w / 2) + typographyArea.w / 4,
      (index % 5) * (typographyArea.h / 5) + typographyArea.h / 5)
    textSize(typographyArea.h / 5)
    textFont(regularFont)
    textAlign(CENTER)
    fill(0, fader * 255)
    push()
    translate(position.x, position.y)
    strokeWeight(0)
    text(letter.toUpperCase(), 0, 0)
    pop()
  })
}