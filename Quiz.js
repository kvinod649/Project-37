class Quiz {
    constructor(){}
  
    /*
    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        
        this.question.html("Question:- What starts out tall, but the longer it stands, the shorter it grows? " );
        this.question.position(150, 80);
        
        this.option1.html("1: An Aging Human");
        this.option1.position(150, 100);
        
        this.option2.html("2: A Growing Tree");
        this.option2.position(150, 120);

        this.option3.html("3: A Lighted Candle");
        this.option3.position(150, 140);

        this.option4.html("4: An Object's Shadow");
        this.option4.position(150, 160);
        

        this.input1.position(150, 230);
    }
    */

    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }

    play(){
        //question.hide();
        textSize(30);
        text("Result of the Quiz", 130, 240)
        textSize(15);
        text("*NOTE: Contestants who answered correctly are highlighted in green color!", 130, 280)
        
        Contestant.getContestantInfo();
    
        if(allContestants !== undefined){
          var display_position = 300;
          for(var plr in allContestants){
            var correctAns = "3";
            if (correctAns === allContestants[plr].answer)
              fill("Green")
            else
              fill("red");
    
            display_position+=20;
            textSize(15);
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,display_position)
          }
        }
    }

}