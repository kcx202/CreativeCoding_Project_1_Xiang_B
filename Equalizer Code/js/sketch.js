// Kevin Xiang
// Creating an Equalizer

//let barlength = [];
let bars = [];
let numBar = 30;
let mid = 100;
let i = 0;
let wub = 0;
let wubStatus = true;
let sinAmp = 0;
let sinMove = 0;


function setup() {
  frameRate(20)
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < numBar; j++) {
    //barlength[i] = 100;
    bars.push(new MakeBar(j))
  }
}

function draw() {
  wubCounter();
  for (let i = 0; i < numBar; i++) {
    background(50);
    let noise = floor(random(-10,10));
    bars[i].barlength = mid + sinAmp*sin(i/3-sinMove)+ sinAmp*cos(i/6)+ wub + noise;

    stroke(0);
    strokeWeight(2);
    fill(255);
    //let w = width/numBar;
    for (let x = 0; x < numBar; x++) {
      //bars[x].barlength = mid + sinAmp*sin(i/3-sinMove)+ sinAmp*cos(i/6)+ wub + noise;
      bars[x].y = height *3/4- bars[x].barlength
      //bars[x].x = x
      // Draw rectangles
      bars[x].colorBar();
    }
  }
}

class MakeBar {
  constructor(x) {
    //These are for finding the rectangle height
    this.x = x;
    this.y = 0;
    this.barheight = 0;
    this.barwidth = 0;
    this.barlength =100;
    //These are for making the little rectangles
    //this.numrect =0;
  }

  display(){
    let w=width/30; //numbar = 30
    rect(this.x*w,this.y,w,this.barlength);
    //rect(x*w,height*3/4-barlength[x],w,barlength[x]);
  }

  colorBar(){
    //fill(122,48,108);
    noStroke();
    let from = color(97, 0, 119);
    let mid = color(214,31,255)
    let to = color(252, 235, 255);
    let w=width/30
    let numrect = round(this.barlength/10);
    let barcolor = 0
    //print(numrect);
    for (let k = 0; k < numrect; k++) {
      if (k<=12){
        barcolor = lerpColor(from,mid,0.2*k);
      } else {
        barcolor = lerpColor(mid,to,0.2*(k-12));
      }
      fill(barcolor);
      rect(this.x*w,height- 20*k,w-10,10);
    }

  }
}

// This is to vary the wub factor
function wubCounter(){
  if (wubStatus === true) {
    wub = wub + 15;
    sinAmp = sinAmp + 10;
  } else {
    wub = wub - 15;
    sinAmp = sinAmp -10;
  }

  if (frameCount % 6 === 0) {
    if (wubStatus === true) {
      wubStatus = false
    } else {
      wubStatus = true;
      sinMove = sinMove +10;
    }
  }
}
