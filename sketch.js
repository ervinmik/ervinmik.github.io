function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let lavaliquid = select("#lavalampglass");
    lavaliquid.style('border-bottom', '250px solid rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')');
    
    let lavaglobs = [select("#glob1"), select("#glob2"), select("#glob3")];
    
    for (let i = 0; i < lavaglobs.length; i++) {
      lavaglobs[i].style('background-color', 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')');
    }
    
    noLoop(); 
  }
  