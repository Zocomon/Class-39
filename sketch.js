var database
var gameState = 0;
var playerCount
var form,player,game
var allPlayers
var Car1,Car2,Car3,Car4,Cars

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
   game = new Game()
   game.getState()
   game.start()

}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
        console.log();
      }
    

}         