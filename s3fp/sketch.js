function setup() {
  }
  
  function draw() {
    background(255);
    
  // let calls the div and then .style dictates the stylized changes which are color   
    let lavaliquid = select("#lavalampglass");
    lavaliquid.style('border-bottom', '250px solid rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')');
    
    let lavaglobs = [select("#glob1"), select("#glob2"), select("#glob3")];
    
    //The loop begins with let i = 0 to start the loop counter i to 0 and for the code to work the length needs to be greater than i aswell. i++ accounts for all elements
    for (let i = 0; i < lavaglobs.length; i++) {
      lavaglobs[i].style('background-color', 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')');
    }
    
    noLoop(); // stops the color from constantly changing
  }
  
