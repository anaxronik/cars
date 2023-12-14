const width = 600;
const height = 600;

canvas.width = 600;
canvas.height = 600;

function reDraw() {
  ctx.clearRect(0, 0, width, height);
  graph.draw(ctx);
}

function addRandomPoint() {
  graph.addPoint(new Point(Math.random() * width, Math.random() * height));
  reDraw();
}

function addRandomSegment() {
  console.log("addRandomSegment");
  const index1 = Math.floor(Math.random() * graph.points.length);
  const index2 = Math.floor(Math.random() * graph.points.length);

  let success = false;

  if (index1 !== index2) {
    success = graph.tryAddSegment(
      new Segment(graph.points[index1], graph.points[index2])
    );
    reDraw();
  }
}

const ctx = canvas.getContext("2d");
const p1 = new Point(200, 200);
const p2 = new Point(500, 200);
const p3 = new Point(400, 400);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p1, p3);
const s3 = new Segment(p1, p4);

const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3]);
graph.draw(ctx);

function removeRandomSegment() {
  if (graph.segments.length > 0) {
    const index = Math.floor(Math.random() * graph.segments.length);
    graph.removeSegment(graph.segments[index]);
    reDraw();
  } else {
    console.log("NO SEGMENT");
  }
}

function removeRandomPoint() {
  if (graph.points.length > 0) {
    const index = Math.floor(Math.random() * graph.points.length);
    graph.removePoint(graph.points[index]);

    reDraw();
  } else {
    console.log("NO POINT");
  }
}

function removeAll() {
  graph.points = [];
  graph.segments = [];
  reDraw();
}
