class Question {

    constructor() {
      this.input1 = createInput("Enter Name Here");
      this.input2 = createInput("Enter Option Number");
      this.button = createButton('Submit');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("MyQuiz Game");
      title.position(180, 0);
  
      var question = createElement('h3')
      question.html("Question:- What starts out tall, but the longer it stands, the shorter it grows? " );
      question.position(150, 80);
      
      var option1 = createElement('h3')
      option1.html("1: An Aging Human");
      option1.position(150, 100);
      
      var option2 = createElement('h3')
      option2.html("2: A Growing Tree");
      option2.position(150, 120);

      var option3 = createElement('h3')
      option3.html("3: A Lighted Candle");
      option3.position(150, 140);

      var option4 = createElement('h3')
      option4.html("4: An Object's Shadow");
      option4.position(150, 160);


      this.input1.position(100, 200);
      this.input2.position(300, 200);
      this.button.position(200, 240);
  
      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
      
    }
  }