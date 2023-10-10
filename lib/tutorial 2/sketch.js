function setup() {
  createCanvas (800,600);
  background(255,023,53);
  textSize(140);
  noStroke();
  // put setup code here
}

function draw() {
  fill(0,0,255);
  ellipse(400,300,800,600);
  
  print("I'm in the console!");
  fill(255);
  rect (350,250,100,100);
  fill(100);
  triangle(100,100,100,400,500,100);
  fill(10,20,30);
  quad(20, 50, 80, 30, 80, 70, 20, 70);
  fill(0,255,5);
  text("Hi Friends!",50,300);
  // put drawing code here
}
