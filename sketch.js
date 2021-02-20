

function setup() {
  createCanvas(800,800);
   hr = hour();
   min = minute();
   sc = second();

 
  
  console.log(min);
}

function draw() {
  background(0);  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360);
  push();
  translate(400,400);
  //angleMode(DEGREES);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  minAngle = map(min,0,60,0,360);
  push();
  translate(400,400);
  //angleMode(DEGREES);
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,150,0);
  pop();

  hrAngle = map(hr,0,60,0,360);
  push();
  translate(400,400);
  //angleMode(DEGREES);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}