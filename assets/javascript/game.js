

    var questions;
    var questionCounter; //Tracks question number
    var currentQuestion;
    var userChoice;
    var score;
    var scoreDisplay = $("#total-score")
    var timeRemaining;
    var timeDisplay = $("#time-remaining")
    var correctAnswer;
    var timerRunning = false;
    var questionDisplay = $("#current-question")
    var answerDisplay = $("#answers-box");
    var questionGif = "https://media.giphy.com/media/3ofSB8h3CxJFHpgFgc/giphy.gif";
    var rightGif = "https://media.giphy.com/media/AxVvk4BBS2a0Veyncc/giphy.gif";
    var okayGif = "https://media.giphy.com/media/xTiN0GtmOhogGvofo4/giphy.gif";
    var wrongGif = "https://media1.giphy.com/media/AxVvjLMLerQQsJtQfC/giphy.gif";


    
    function startScreen() {
      score = 0;
      timeDisplay.css('opacity', '0')
      timeRemaining = 15;
      questions = [{
        question: "Who is the youngest-ever Oscar winner?",
        choices: ["Tatum O’Neal", "Jacob Tremblay", "Anna Paquin", "Patty Duke"],
        answer: "Tatum O'Neil"
      }, {
        question: "Who was the first black actor to win an Oscar?",
        choices: ["Hattie McDaniel", "Sidney Poitier", "Denzel Washington", "Halle Berry"],
        answer: "Hattie McDaniel"
      }, {
        question: "Which of these films received zero nominations?",
        choices: ["The Big Lebowski", "Steel Magnolias", "Harry Potter and the Sorcerer’s Stone", "The Truman Show"],
        answer: "The Big Lebowski"
      }, {
        question: "What was the longest movie ever nominated for Best Picture?",
        choices: ["Cleopatra", "Lawrence of Arabia", "Gone With The Wind", "The Ten Commandments"],
        answer: "Cleopatra"
      }, {
        question: "Which of the four women to play the lead in 'A Star is Born' was not nominated for her performance",
        choices: ["Barbra Streisand", "Lady Gaga", "Janet Gaynor", "Judy Garland"],
        answer: "Barbra Streisand"
      }, {
        question: "How many Oscar nominations has Meryl Streep received?",
        choices: [17, 21, 11, 29],
        answer: 21
      }, {
        question: "Which of these men has never won for directing?",
        choices: ["Stanley Kubrick", "Steven Spielberg", "James Cameron", "Ron Howard"],
        answer: "Stanley Kubrick"
      }, {
        question: "What was the first technicolor movie to win Best Picture?",
        choices: ["The Wizard of Oz", "Gone With The Wind", "The Adventures of Robin Hood", "Snow White"],
        answer: "Gone With The Wind"
      }, {
        question: "Which film won Best Picture in 1991?",
        choices: ["Goodfellas", "Dances With Wolves", "The Godfather Part III", "Ghost"],
        answer: "Dances With Wolves"
      }, {
        question: "Which Disney film was nominated for Best Picture?",
        choices: ["Snow White", "The Lion King", "Beauty and the Beast", "Aladdin"],
        answer: "Beauty and the Beast"
      }];
      questionDisplay.text("How well do you know your talkies?")
      timeDisplay.append(timeRemaining)
      var startButton = $("<button>");
      startButton.addClass("btn-warning");
      startButton.text("Start!");
      startButton.attr("id", "start");
      startButton.css('opacity', '0')
      $("#answers-box").append(startButton)
      // Slide in large logo (left), subtitle (right), and fade in start button:
      $("#nav-bar").addClass('animated slideInDown').one('animationend', function() {
          $("#nav-bar").removeClass('animated slideInDown')});
      $("#gif-box").addClass('animated slideInLeft').one('animationend', function() {
          $("#gif-box").removeClass('animated slideInLeft')});
      $("#question-column").addClass('animated slideInRight').one('animationend', function() {
          $("#question-column").removeClass('animated slideInRight')});
          // animate start button to pulse continuously until mouseover, and change color on mouseover:
      setTimeout(function() {
        startButton.animate({opacity:1});
      }, 1000);
      // Create click listener for start button that:
        // Shrink large logo container, and slide to top of page:
        // Fade out start button
        // triggers the first question (display question):
      $("#start").on("click", function() {
        $("#current-question").animate({opacity:0});
        $("#gif-image").animate({opacity:0});
        $("#start").fadeOut();
        questionCounter = 9;
        setTimeout(function() {
          displayQuestion();
        }, 500);
        setTimeout(function() {
          $("#time.score").animate({opacity:1})
      },1000);
    })    
  }    
    function displayQuestion() {
      if (questions.length < 1) {
        endScreen();
      }
      else {

      scoreDisplay.text("Score: " + score)
      $("#gif-image").attr("src", questionGif); 
      startTimer()  
      timeDisplay.css('opacity', '1');       
      questionDisplay.empty();
      answerDisplay.empty()
      // Pull random question-object from array, remove from array, and store in variable "currentQuestion":
        currentQuestion= questions.pop();
        // Append current question to 'question' div:
        questionDisplay.prepend(currentQuestion.question);
        correctAnswer = currentQuestion.answer;
        console.log(currentQuestion.question);
          for (var i=0; i<currentQuestion.choices.length; i++) {
            var answerButton = $("<button " + "class=" + "question-choice" + "/>");
            answerButton.val(currentQuestion.choices[i]);
            answerButton.addClass("button");
            answerButton.addClass("btn-warning");
            answerButton.addClass("question-choice");
            answerButton.text(currentQuestion.choices[i]);
            $("#answers-box").append(answerButton);
            $("#answers-box").append("<br><br>");
          }
          setTimeout(function() {
              questionDisplay.animate({opacity:1});
              $("#gif-image").animate({opacity:1});
              answerDisplay.animate({opacity:1});
          }, 500);
        }

        $(".question-choice").on("click", function(){
          timeDisplay.css('opacity', '0');
          userChoice = $(this).val();
          console.log(userChoice);
          if (userChoice === correctAnswer) {
            rightAnswer()
          }
          else {
            wrongAnswer()
          }
        }) 
    }

        
    
    function rightAnswer() {
      score++;
      scoreDisplay.text("Score: " + score);
      $("#gif-image").attr("src", rightGif);
      questionDisplay.text("Correct!")

      var nextButton = $("<button>");
        nextButton.addClass("btn-warning");
        nextButton.text("Next >>");
        nextButton.attr("id", "next");
        answerDisplay.empty()
        answerDisplay.append("Keep it up!"  + "<br><br>")
        answerDisplay.append(nextButton);

      $("#next").on("click", function() {
        displayQuestion();
      })
    }

    function wrongAnswer() {
      scoreDisplay.text("Score: " + score);
      $("#gif-image").attr("src", wrongGif);
      questionDisplay.text("Whoops! Nice try.")
      var nextButton = $("<button>");
        nextButton.addClass("btn-warning");
        nextButton.text("Next >>");
        nextButton.attr("id", "next");
        answerDisplay.empty()
        answerDisplay.append("Get 'em next time."  + "<br><br>")
        answerDisplay.append(nextButton);

      $("#next").on("click", function() {
        displayQuestion();
      })
    }

    function endScreen() {

      scoreDisplay.text("Score: " + score);
      $("#gif-image").attr("src", questionGif);
      questionDisplay.text("Whoops! Nice try.")
      var resetButton = $("<button>");
        resetButton.addClass("btn-warning");
        resetButton.text("Play again?");
        resetButton.attr("id", "reset");
        answerDisplay.empty()
        

      if (score > 7) {
        questionDisplay.text("Amazing job!!")
        $("#gif-image").attr("src", rightGif);
        answerDisplay.append("You answered " + score + " questions correctly!" + "<br><br>")
        answerDisplay.append("You really know your stuff!")
      }
      else if (7 > score > 4) {
        questionDisplay.text("Not too shabby!")
        $("#gif-image").attr("src", okayGif);
        answerDisplay.append("You answered " + score + " questions correctly." + "<br><br>")
        answerDisplay.append("Good work, but yoo've got room to improve.")
      }
      else {
        questionDisplay.text("Ouch...")
        $("#gif-image").attr("src", wrongGif);
        answerDisplay.append("You answered " + score + " questions correctly." + "<br><br>")
        answerDisplay.append("You should watch more TV.....")
      }

      answerDisplay.append("<br><br>");
      answerDisplay.append(resetButton);

      $("#reset").on("click", function() {
        questionDisplay.empty();
        timeDisplay.empty();
        answerDisplay.empty();
        scoreDisplay.empty();
        startScreen();
        timerRunning = false;
    })
  }
    // Slide out left "question-box div"
    // set timeout to Empty the "question-box" div after it is hidden from the page:
    // reset timeRemaining
    
startScreen();

// Create a timer with start/stop functions:

function startTimer() {
  timeRemaining = 15;
  if (!timerRunning) {
    var quizTimer = setInterval(function(){
      $("#time-remaining").text("Time: 00:" + timeRemaining);
      timeRemaining--;

      if (timeRemaining < 10) {
        $("#time-remaining").text("Time: 00:0" + timeRemaining);
      }

      if(timeRemaining < 0){
        clearInterval(quizTimer);
        $("#time-remaining").text("Time's Up! ");
        $("#time-remaining").append("<br>")
        endScreen();
      }
    }, 1000);
    timerRunning = true;
  }
    
}

