var canvas;
var gameState = 0;
var contestantCount = 0;
var quiz, question;
var contestant;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  //question = new Question();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    //clear();
    quiz.play();
  }
  //quiz.display();
}
