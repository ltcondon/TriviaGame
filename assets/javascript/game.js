

    var questions = [{
      question: "Who is the youngest-ever Oscar winner?",
      choices: ["Tatum O’Neal", "Jacob Tremblay", "Anna Paquin", "Patty Duke"],
      correctAnswer: "Tatum O'Neil"
    }, {
      question: "Who was the first black actor to win an Oscar?",
      choices: ["Hattie McDaniel", "Sidney Poitier", "Denzel Washington", "Halle Berry"],
      correctAnswer: "Hattie McDaniel"
    }, {
      question: "Which of these films received zero nominations?",
      choices: ["The Big Lebowski", "Steel Magnolias", "Harry Potter and the Sorcerer’s Stone", "The Truman Show"],
      correctAnswer: "The Big Lebowski"
    }, {
      question: "What was the longest movie ever nominated for Best Picture?",
      choices: ["Cleopatra", "Lawrence of Arabia", "Gone With The Wind", "The Ten Commandments"],
      correctAnswer: "Cleopatra"
    }, {
      question: "Which of the four women to play the lead in 'A Star is Born' was not nominated for her performance",
      choices: ["Barbra Streisand", "Lady Gaga", "Janet Gaynor", "Judy Garland"],
      correctAnswer: "Barbra Streisand"
    }, {
      question: "How many Oscar nominations has Meryl Streep received?",
      choices: [17, 21, 11, 29],
      correctAnswer: 21
    }, {
      question: "Which of these men has never won for directing?",
      choices: ["Stanley Kubrick", "Steven Spielberg", "James Cameron", "Ron Howard"],
      correctAnswer: "Stanley Kubrick"
    }, {
      question: "What was the first technicolor movie to win Best Picture?",
      choices: ["The Wizard of Oz", "Gone With The Wind", "The Adventures of Robin Hood", "Snow White"],
      correctAnswer: "Gone With The Wind"
    }, {
      question: "Which film won Best Picture in 1991?",
      choices: ["Goodfellas", "Dances With Wolves", "The Godfather Part III", "Ghost"],
      correctAnswer: "Dances With Wolves"
    }, {
      question: "Which Disney film was nominated for Best Picture?",
      choices: ["Snow White", "The Lion King", "Beauty and the Beast", "Aladdin"],
      correctAnswer: "Beauty and the Beast"
    }];
    


    var questionCounter; //Tracks question number
    var selections = []; //Array containing user choices
    var currentQuestion;
    var quiz = $('#question-box'); //Quiz div object
    var score = 0
    var timeRemaining = 1500
    var selectedAnswer;
    var correctAnswer;


    
    function startScreen() {

    // Slide in large logo (left), subtitle (right), and fade in start button:
    $("#logo").addClass('animated slideInLeft').one('animationend', function() {
        $("#logo").removeClass('animated slideInLeft')});
    $("#subheader").addClass('animated slideInRight').one('animationend', function() {
        $("#logo").removeClass('animated slideInRight')});
        // animate start button to pulse continuously until mouseover, and change color on mouseover:
    $("#start").addClass('animated slideInRight').one('animationend', function() {
        $("#start").removeClass('animated slideInRight')});
    
    // Create click listener for start button that:
        // Shrink large logo container, and slide to top of page:
        // Fade out start button
        // triggers the first question (display question):
    $("#start").on("click", function() {
        $("#large-logo").fadeOut();
        $("logo").animate({height: '60px'});
        $("#start").fadeOut();
        questionCounter = 9;
        displayQuestion()
        start()
    })
}
    function displayQuestion() {
        $("#questions").fadeIn();
    }
startScreen();

// Create a timer with start/stop functions:

function start() {
    var timeLeft = 59;
    var quizTimer = setInterval(function(){
      $("#time-remaining").text(timeLeft);
      timeLeft--;
      if(timeLeft <= 0){
        clearInterval(quizTimer);
        document.getElementById("countdown").innerHTML = "Finished"
      }
    }, 1000);
}


    

//     function addRadioButtons(array) {
//         var possibleAnswers = $('#possible-answers');
//         result.html('');

//         for (var i = 0; i < array.length; i++) {
//         possibleAnswers.append('<label><input type="radio" name="possible-answer" value="' + array[i] + '" /> ' + array[i] + '</label>');
//         }
//         $("#question").append(possibleAnswers)
//     }
    
//     function displayQuestion() {
//       if (questionCounter === 0) {
//             endScreen()
//       }
//       // if questionCounter > 0
//       else {
//       // Pull random question-object from array, remove from array, and store in variable "currentQuestion":
//       currentQuestion = questions[(Math.floor(Math.random() * questions.length) + 1)].question;
//       console.log("Current Question: " + currentQuestion);
//       // Append current question to 'question' div:
//       $("#question").append(currentQuestion);
      
//       // Create a radio button for each possible answer:
//       function addRadioButtons(array) {
//         var possibleAnswers = $('#possible-answers');
//         possibleAnswers.html('');
  
//         for (var i = 0; i < array.length; i++) {
//           possibleAnswers.append('<label><input type="radio" name="possible-answer" value="' + array[i] + '" /> ' + array[i] + '</label>');
//         }

//         // Append buttons to "possible-answers" div:
//         $("#question").append(possibleAnswers)
//       }
//       addRadioButtons(currentQuestion.choices)
        
      
//       // push the question-object's correct answer in var "correctAnswer":

    //   }
    // }

//     // Create an ajax call that returns a random gif:
//         // after response is returned, create a new div that stores the random gif
//         // push that new div to the "random gif" div:

//     // Append timeRemaining to "time-remaining" div:
//         // display every time interval is refreshed
//     // Append questionCounter to 'progress' div:
//         // display 'progress' div:

//     // Slide in "question-box" that contains "question" div, "possible-answers" div, 'timer' div, 'progress' div and "random gif" div:
//     // Start timer

//     

//         // Create "submit" button
//             // Assign it a click listener that:
//             // If an answer has been selected:
//               // store response in a variable "selectedAnswer"
//               // if selectedAnswer === correctAnswer:
//               // questionCounter--
//                 // increase score by 1
//               // call nextQuestion();
//             // Else: alert player to select an answer
//         // Fade in submit button after 'question-box' has reappeared'
        
//     // if timeRemaining === 0, loseScreen()

//     // function nextQuestion()
//     // Slide out left "question-box div"
//     // set timeout to Empty the "question-box" div after it is hidden from the page:
//     // reset timeRemaining

//             /// ---- repeating some displayQuestion() functionality: ----

//     // Pull random question-object from array and store in variable "currentQuestion"
//     // Append random question from questions array to the "question" div:
//         // Remove question chosen from array:
//         // Create a radio button for each possible answer:
//         // Append buttons to "possible-answers" div:
//             // push the question-object's correct answer in var "correctAnswer":

//     // Create an ajax call that returns a random gif:
//         // after response is returned, create a new div that stores the random gif
//         // push that new div to the "random gif" div:

//     // Slide in "question-box" that contains "question" div, "possible-answers" div, and "random gif" div:
//     // Start timer

//     // function loseScreen()
//     //         // play 'boo' audio
//     //         // fade in 'loser' image and text
    
//     // function endScreen()
//     // Determine user score
//         // if total score < 4:
//             // play 'boo' audio
//             // fade in 'loser' image and text
//         // if 4 < total score < 8:
//             // play 'some-applause' audio
//             // fade in 'not bad' image and text
//         // if total score > 7:
//             // play 'cheers' audio
//             // fade in 'amazing!' image and text

