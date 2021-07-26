var car1,car2,car3
var wall1,wall2,wall3;
var speed,weight;
function setup() {
  createCanvas(1200,400);

  car1 =  createSprite(30, 100, 80, 30);
 car2 = createSprite(30,200,80,30);
 
 car3 = createSprite(30,300,50,20)
 
 
 wall1 =  createSprite(1100, 100, 30, 80);
 wall2 =  createSprite(1100, 200, 30, 80);
 wall3 =  createSprite(1100, 300, 30, 80);
 speed=random(10,90)
 weight=random(400,1500)
}

function draw() {
  background("black");  
 car1.velocityX=speed
 car2.velocityX=speed
 car3.velocityX=speed

 if(wall1.x-car1.x<(car1.width+wall1.width) /2)  {
   car1.velocityx=0
   var deformation=0.5*weight*speed*speed/22500;
   if(deformation>180) {
     car1.shapeColor=color(255,0,0)
   }
   if(deformation<180 && deformation>100) {
    car1.shapeColor=color(230,230,0)
   }
   if(deformation<100) {
    car1.shapeColor=color(0,255,0)
   }
   }




   if(wall2.x-car2.x<(car2.width+wall2.width) /2)  {
    car2.velocityx=0
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180) {
      car2.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100) {
     car2.shapeColor=color(230,230,0)
    }
    if(deformation<100) {
     car2.shapeColor=color(0,255,0)
    }
    }


    if(wall3.x-car3.x<(car3.width+wall3.width) /2)  {
      car3.velocityx=0
      var deformation=0.5*weight*speed*speed/22500;
      if(deformation>180) {
        car3.shapeColor=color(255,0,0)
      }
      if(deformation<180 && deformation>100) {
       car3.shapeColor=color(230,230,0)
      }
      if(deformation<100) {
       car3.shapeColor=color(0,255,0)
      }
      }


   drawSprites()

 }




  








