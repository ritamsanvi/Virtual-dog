//Create variables here
var food,happydog
var database
var foodS,foodStock
function preload()
{
  dogImage= loadImage("images/dogImg.png");
  dog2Image= loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  dog= createSprite(250,250,10,10);
  database=firebase.database();

  var foodStock=database.ref('food')
  foodStock.on("value",readStock);

  dog.addImage(dogImage);
  dog.scale=0.5

}


function draw() { 
  background("cyan"); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog2Image);

  }

  drawSprites();
  textSize(20)
  text("Virtual Pet",200,200)
  //add styles here

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
