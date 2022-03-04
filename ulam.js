let x,y;
let steps = 1;
let numSteps = 1;
let dist = 100;
let last;
const canv = 700;
let state = 0;

function setup() {
  createCanvas(canv, canv);
  x = width /2;
  y = height /2;
  background(10);
  last = canv/dist*canv/dist

}



function draw() {
  textSize(25);
  textAlign(CENTER);
  fill(255)
  text(steps,x,y);

    // x = x + dist;
  steps++;
    switch (state){
      case 0:
        x += dist;

        break;
      case 1:
        y -= dist;

        break;
      case 2:
        x -=dist;

        break;
      case 3:
        y +=dist;
        state = 0;
        break;
  }
  if (steps % numSteps == 0){
    state = (state + 1) % 4;
  }
      numSteps++;
  frameRate(1)
  
}
