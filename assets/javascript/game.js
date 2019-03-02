    var questions = [{
      question: "Who is the youngest-ever Oscar winner?",
      choices: ["Tatum O’Neal", "Jacob Tremblay", "Anna Paquin", "Patty Duke"],
      correctAnswer: 0
    }, {
      question: "Who was the first black actor to win an Oscar?",
      choices: ["Hattie McDaniel", "Sidney Poitier", "Denzel Washington", "Halle Berry"],
      correctAnswer: 0
    }, {
      question: "Which of these films received zero nominations?",
      choices: ["The Big Lebowski", "Steel Magnolias", "Harry Potter and the Sorcerer’s Stone", "The Truman Show"],
      correctAnswer: 0
    }, {
      question: "What was the longest movie ever nominated for Best Picture?",
      choices: ["Cleopatra", "Lawrence of Arabia", "Gone With The Wind", "The Ten Commandments"],
      correctAnswer: 0
    }, {
      question: "Which of the four women to play the lead in 'A Star is Born' was not nominated for her performance",
      choices: ["Barbra Streisand", "Lady Gaga", "Janet Gaynor", "Judy Garland"],
      correctAnswer: 0
    }, {
      question: "How many Oscar nominations has Meryl Streep received?",
      choices: [17, 21, 11, 29],
      correctAnswer: 1
    }, {
      question: "Which of these men has never won for directing?",
      choices: ["Stanley Kubrick", "Steven Spielberg", "James Cameron", "Ron Howard"],
      correctAnswer: 0
    }, {
      question: "What was the first technicolor movie to win Best Picture?",
      choices: ["The Wizard of Oz", "Gone With The Wind", "The Adventures of Robin Hood", "Snow White"],
      correctAnswer: 1
    }, {
      question: "Which film won Best Picture in 1991?",
      choices: ["Goodfellas", "Dances With Wolves", "The Godfather Part III", "Ghost"],
      correctAnswer: 1
    }, {
      question: "Which Disney film was nominated for Best Picture?",
      choices: ["Snow White", "The Lion King", "Beauty and the Beast", "Aladdin"],
      correctAnswer: 2
    }];
    
    var questionCounter; //Tracks question number
    var selections = []; //Array containing user choices
    var currentQuestion;
    var quiz = $('#question-box'); //Quiz div object
    var score = 0
    var timeRemaining = 1500
    var selectedAnswer;
    var correctAnswer;

    function startScreen ()

    // Slide in large logo (left), subtitle (right), and fade in start button:
        // animate start button to pulse continuously until mouseover, and change color on mouseover:
    
    // Create click listener for start button that:
        // Shrink large logo container, and slide to top of page:
        // Fade out start button
        // triggers the first question (display question):
          displayQuestion()
          
    // var questionCounter = 9;
    function displayQuestion()
    // if questionCounter === 0:
        // endScreen()
    // if questionCounter > 0

    // Pull random question-object from array and store in variable "currentQuestion"
    // Append random question from questions array to the "question" div:
        // Remove question chosen from array:
        // Create a radio button for each possible answer:
        // Append buttons to "possible-answers" div:
            // push the question-object's correct answer in var "correctAnswer":

    // Create an ajax call that returns a random gif:
        // after response is returned, create a new div that stores the random gif
        // push that new div to the "random gif" div:

    // Append timeRemaining to "time-remaining" div:
        // display every time interval is refreshed
    // Append questionCounter to 'progress' div:
        // display 'progress' div:

    // Slide in "question-box" that contains "question" div, "possible-answers" div, 'timer' div, 'progress' div and "random gif" div:
    // Start timer

    // Create a timer with start/stop functions:

            var time = 0;

            function reset() {

              time = 0;
              lap = 1;

              $("#display").text(":15");
              $("#laps").text("");

            }

            function start() {
              intervalId = setInterval(count, 1000);
            }

            function stop() {

              console.log("stopping");
              clearInterval(intervalId);

            }

            function recordLap() {

              var converted = timeConverter(time);
              $("#laps").append("<p>Lap " + lap + " : " + converted + "</p>");
              lap++;

            }

            function count() {

              time++;
              var converted = timeConverter(time);
              $("#display").text(converted);

            }

            function timeConverter(t) {

              var minutes = Math.floor(t / 60);
              var seconds = t - (minutes * 60);

              if (seconds < 10) {
                seconds = "0" + seconds;
              }

              if (minutes === 0) {
                minutes = "00";
              }
              else if (minutes < 10) {
                minutes = "0" + minutes;
              }

              return minutes + ":" + seconds;
            }

        start()

        // Create "submit" button
            // Assign it a click listener that:
            // If an answer has been selected:
              // store response in a variable "selectedAnswer"
              // if selectedAnswer === correctAnswer:
              // questionCounter--
                // increase score by 1
              // call nextQuestion();
            // Else: alert player to select an answer
        // Fade in submit button after 'question-box' has reappeared'
        
    // if timeRemaining === 0, loseScreen()


    function nextQuestion()
    // Slide out left "question-box div"
    // set timeout to Empty the "question-box" div after it is hidden from the page:
    // reset timeRemaining

            /// ---- repeating some displayQuestion() functionality: ----

    // Pull random question-object from array and store in variable "currentQuestion"
    // Append random question from questions array to the "question" div:
        // Remove question chosen from array:
        // Create a radio button for each possible answer:
        // Append buttons to "possible-answers" div:
            // push the question-object's correct answer in var "correctAnswer":

    // Create an ajax call that returns a random gif:
        // after response is returned, create a new div that stores the random gif
        // push that new div to the "random gif" div:

    // Slide in "question-box" that contains "question" div, "possible-answers" div, and "random gif" div:
    // Start timer

    function loseScreen()
            // play 'boo' audio
            // fade in 'loser' image and text
    
    function endScreen()
    // Determine user score
        // if total score < 4:
            // play 'boo' audio
            // fade in 'loser' image and text
        // if 4 < total score < 8:
            // play 'some-applause' audio
            // fade in 'not bad' image and text
        // if total score > 7:
            // play 'cheers' audio
            // fade in 'amazing!' image and text
    
