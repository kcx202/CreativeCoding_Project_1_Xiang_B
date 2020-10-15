
// Kevin Xiang
// Creating an Equalizer

let barLength = [];
let total = 20;
let mid = 100;
let i = 0;
let wub = 0;

function setup() {
  frameRate(6)
  createCanvas(800,800);
  for (let i = 0; i < total; i++) {
    barLength[i] = 100;
  }
}

function draw() {
  i = floor(random(1,6));
  print(i);
  if (i === 1){
    wub = 200;
  }else{
    wub = 0;
  }

  for (let i = 0; i < barLength.length; i++) {
    background(127);

    let noise = floor(random(-40,40));
    barLength[i] = mid + wub + noise;

    // Draw rectangles
    stroke(0);
    strokeWeight(2);
    fill(255);
    let w = width/barLength.length;
    for (let x = 0; x < barLength.length; x++) {
      rect(x*w,height/2-barLength[x],w,barLength[x]);
    }
  }
}
