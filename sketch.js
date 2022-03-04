let x, y, px, py;
let steps = 1;
let numSteps = 1;
let stepDir = 10;
let last;
let turnTwo = 0;
const canv = 700;
let state = 0;

function setup() {
  createCanvas(canv, canv);
  x = width / 2;
  y = height / 2;
  background(10);
  last = (canv / stepDir) * (canv / stepDir);
}

function draw() {
  // textSize(25);
  // textAlign(CENTER);
  // text(steps, x, y);
  fill(200,200,1);
  stroke(255,100,1);
  rectMode(CENTER);
  square(x, y, stepDir);
  if (isPrime(steps) && steps!=1){
    fill(50,30,1);
    square(x, y, stepDir);
  }
  line(x, y, px, py);
  px = x;
  py = y;

  switch (state) {
    case 0:
      x += stepDir;

      break;
    case 1:
      y -= stepDir;

      break;
    case 2:
      x -= stepDir;

      break;
    case 3:
      y += stepDir;
      break;
  }

  if (steps % numSteps == 0) {
    state = (state + 1) % 4;
    turnTwo++;
    if (turnTwo % 2 == 0) {
      numSteps++;
    }
  }
  steps++;
  console.log(last);
  frameRate(1000000);
  if (last < steps) {
    noLoop();
  }
}

function isPrime(num) {
  let prime = true;
  for (let i = 2; i <= sqrt(num); i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
