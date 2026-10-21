var box
function setup() {
  createCanvas(800, 800);
  box = createSprite(100, 200, 100, 100)
  box.shapeColor = "blue"

}
  function draw() {
    background(30);
    if(keyDown(RIGHT_ARROW)){
      box.shapeColor = "red"
    }
     if(keyDown(LEFT_ARROW)){
      box.shapeColor = "green"
    }
     if(keyDown(UP_ARROW)){
      box.shapeColor = "cyan"
    }
     if(keyDown(DOWN_ARROW)){
      box.shapeColor = "yellow"
    }
    drawSprites()
  }




