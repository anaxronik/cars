class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  draw(ctx, size = 10, color = "black") {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }
}
