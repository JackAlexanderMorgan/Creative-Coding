function setup() {
  createCanvas (800,1000);
  background(155,255,155);
  textSize(140);
  noStroke();
  // put setup code here
}

function draw() {
  // put drawing code here
  fill (251,229,186);
  ellipse(400,300,320,400);
  ellipse(400,495,90,20);
  //eyes
  fill (255);
  ellipse(340,300,50,30);
  ellipse(460,300,50,30);
  fill(0,125,255);
  ellipse(340,300,20,20);
  ellipse(460,300,20,20);
  fill(0);
  ellipse(340,300,10,10);
  ellipse(460,300,10,10);
  fill(255);
  ellipse(335,295,7,7);
  ellipse(455,295,7,7);
  //nose
  fill(255,214,164);
  triangle(400, 300, 390, 390, 420, 390);
  
}
