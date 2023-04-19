//java oobjects, arrays, new object upon mouse click
let walkers = [];
let lifespan = 72;
let walkMax = 3;

let palette = ['#39C5BB',
               '#66CCFF',
               '#00FFCC',
               '#006666'];


function setup() {
  createCanvas(400, 400);
  noStroke();
  background (19);
  
  print('LanWang_ObjectsandArrays_041923');
}

function draw() {
  if (mouseIsPressed) {
    
    let randomColor = palette[int(random(palette.length))];
    
    let w = {
      x: mouseX,
      y: mouseY,
      age: 0,
      color: randomColor
    }
    
    walkers.push(w) 
  }
 for (let i = 0; i < walkers.length; i++) {
   walkers[i].x += random(-walkMax, walkMax);
  walkers[i].y += random(-walkMax, walkMax);
  
  fill(walkers[i].color);
  
  let siize = map(walkers[i].age, 0, lifespan, 5, 35);
  ellipse(walkers[i].x, walkers[i].y, siize, siize);
   
   walkers[i].age++;
   
      if (walkers[i].age > lifespan) {
     walkers.splice(i, 1);
   }
   

 } 
  
  
}