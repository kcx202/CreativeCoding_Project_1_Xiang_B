// Kevin Xiang
// Creating an Equalizer

let barLength = [];
let numBar = 30;
let mid = 100;
let i = 0;
let wub = 0;
let wubStatus = true;
let sinAmp = 0;
let sinMove = 0;
const Y_AXIS = 1;
let c1, c2;


function setup() {
  frameRate(20)
  createCanvas(windowWidth, windowHeight);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);
  for (let i = 0; i < numBar; i++) {
    barLength[i] = 100;
  }
}

function draw() {

  if (wubStatus === true) {
    wub = wub + 20;
    sinAmp = sinAmp + 15;
  } else {
    wub = wub - 20;
    sinAmp = sinAmp -15;
  }
  print(sinAmp)

  if (frameCount % 6 == 0) {
    if (wubStatus === true) {
      wubStatus = false
    } else {
      wubStatus = true;
      sinMove = sinMove +10;
    }
  }

  for (let i = 0; i < barLength.length; i++) {
    background(50);

    let noise = floor(random(-20,20));
    barLength[i] = mid + sinAmp*sin(i/3-sinMove)+ wub + noise;

    // Draw rectangles
    stroke(0);
    strokeWeight(2);
    fill(255);
    let w = width/barLength.length;
    for (let x = 0; x < barLength.length; x++) {
      rect(x*w,height*3/4-barLength[x],w,barLength[x]);
    }
  }
}
