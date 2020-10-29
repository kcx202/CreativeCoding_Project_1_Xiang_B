// Kevin Xiang
// Creating an Equalizer

//let barlength = [];
let bars = [];
let numBar = 20;
let mid = 100;
let i = 0;
let wub = 0;
let wubStatus = true;
let sinAmp = 0;
let sinMove = 0;
let dampener = 0;
let r = 255;
let g = 0;
let b = 0;
let baseX = 0;
let baseY = 0;


function setup() {
  frameRate(60)
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < numBar; j++) {
    //barlength[i] = 100;
    bars.push(new MakeBar(j))
  }
}

function draw() {
  wubCounter();
  if (frameCount>=393){
  colorShuffle();
  }
  for (let i = 0; i < numBar; i++) {
    background(50);
    let noise = floor(random(-10,10)); // noise to add effect
    if (baseX<width-210){ //Intro Bar moves across screen
      fill(r,g,b)
      rect(width/2-(baseX/2),height * 1/7 - 30, 10+(baseX),10)
      baseX=baseX+0.2;
      bars[i].barlength = 0;
    }
    if (floor(baseX)== floor(width-210) && round(baseY) < (height * 6/7-30)){ //moves the base bar downwards in intro
      fill(r,g,b)
      rect(100,height * 1/7 + baseY - 30, width-210,10)
      baseY=baseY+0.2;
      bars[i].barlength = 0;
    }
    if (round(baseY) == round(height * 6/7-30)&&frameCount<=825){ //ramping up of bars
    dampener = dampener + 0.0001;
    bars[i].barlength = (mid + sinAmp*sin(i/3-sinMove)+ sinAmp*cos(i/6)+ wub + noise)*dampener;
    }
    if (frameCount>=825 && frameCount<=1225){ //max bars
    bars[i].barlength = mid + sinAmp*sin(i/3-sinMove)+ sinAmp*cos(i/6)+ wub + noise;
    }
    if (frameCount>1225){
    dampener = dampener - 0.0001; //ramping down of bars
    bars[i].barlength = (mid + sinAmp*sin(i/3-sinMove)+ sinAmp*cos(i/6)+ wub + noise)*dampener;
    }
    stroke(0);
    strokeWeight(2);
    fill(255);
    for (let x = 0; x < numBar; x++) { //draws the bars
      bars[x].y = height *3/4- bars[x].barlength
      bars[x].colorBar();
    }
  }
  if(round(baseY) == round(height * 6/7-30)&& dampener > -0.5){ // draws the bottom bar
  fill(r,g,b)
  rect(100,height * 6/7 + 20, width-210,10)
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
  }

  display(){
    let w=width/30; //numbar = 30
    rect(this.x*w,this.y,w,this.barlength);
    //rect(x*w,height*3/4-barlength[x],w,barlength[x]);
  }

  colorBar(){
    noStroke();
    //let from = color(97, 0, 119); Original Color idea
    let from = color(r, g, b);
    let mid = color(214,31,255)
    let to = color(252, 235, 255);
    let w=(width-200)/numBar
    let numrect = round(this.barlength/10);
    let barcolor = 0
    for (let k = 0; k < numrect; k++) {
      if (k<=15){
        barcolor = lerpColor(from,mid,0.1*k);
      } else {
        barcolor = lerpColor(mid,to,0.2*(k-15));
      }
      fill(barcolor);
      rect(this.x*w+100,height*6/7- 20*k,w-10,10);
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

function colorShuffle() {
  // Red to Yellow
  if ( g<255 && r==255 && b==0) {
    g++;
  }
  // Yellow to Green
  if (g == 255 && r>0) {
    r--;
  }
  // Green to Turqoise
  if (r==0 && g==255 && b<255) {
    b++;
  }
  // Turqoise to Blue
  if (b==255 && g>0) {
    g--;
  }
  // Blue to Violet
  if (r < 255 && g==0 && b==255) {
    r++;
  }
  // Violet to Red
  if (r == 255 && b>0) {
    b--;
  }
}
