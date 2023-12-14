class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }
    for (const point of this.points) {
      point.draw(ctx);
    }
  }

  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((i) => point.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }

  addSegment(seg) {
    this.segments.push(seg);
  }

  tryAddSegment(seg) {
    const isExist = this.containSegment(seg);
    console.log({ isExist });
    if (!isExist) {
      this.addSegment(seg);
    }
    return false;
  }

  containSegment(seg) {
    return !!this.segments.find((s) => s.equals(seg));
  }

  removeSegment(seg) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }

  removePoint(point) {
    const segments = this.getSegmentsWithPoint(point);
    segments?.forEach((i) => this.removeSegment(i));
    this.points.splice(this.points.indexOf(point), 1);
  }

  getSegmentsWithPoint(point) {
    return this.segments.filter((s) => s.includes(point));
  }
}
