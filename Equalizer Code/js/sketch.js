
// Kevin Xiang
// Creating an Equalizer

let barLength = [];
let total = 20;
let mid = 100;
let wubCounter;
let wub = 0;

function setup() {
  frameRate(10)
  createCanvas(800,800);
  for (let i = 0; i < total; i++) {
    barLength[i] = 100;
  }
}

function draw() {
  wubCounter = wubCounter + 1;

  if (wubCounter == 5);{
    wub = 80;
  }
  if (wubCounter == 6);{
    wub = 0;
    wubCounter=0;
  }

  for (let i = 0; i < barLength.length; i++) {
  background(127);

  let noise = floor(random(-40,40));
  barLength[i] = mid + wub + noise;

  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(2);
  fill(255);
  let w = width/barLength.length;
  for (let x = 0; x < barLength.length; x++) {
    rect(x*w,height/2-barLength[x],w,barLength[x]);
  }
}
}
