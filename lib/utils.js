class Agent {
  constructor() {
    this.stepper = setInterval(() => {
      if (this.shouldStop) {
        clearInterval(this.stepper)
      }
      this.step()
    }, 0)
  }
}

function curveBetween(x1, y1, x2, y2) {
  let d = 0, h = 0, flip = 0;
  var original = p5.Vector.sub(createVector(x2, y2), createVector(x1, y1));
  var inline = original.copy().normalize().mult(original.mag() * d);
  var rotated = inline.copy().rotate(radians(90)+flip*radians(180)).normalize().mult(original.mag() * h);
  var p1 = p5.Vector.add(p5.Vector.add(inline, rotated), createVector(x1, y1));
  rotated.mult(-1);
  var p2 = p5.Vector.add(p5.Vector.add(inline, rotated).mult(-1), createVector(x2, y2));
  bezier(x1, y1, p1.x, p1.y, p2.x, p2.y, x2, y2)
}
