pseudocode

# What starting data does my application need to run?

 - Questions and Answers
    - array list for our series of Questions
    
    - each question will be an object

    - each question display will have
        question text
        answer options
        ```
        {
            question: "What color is the sky"
            multipleChoiceOptions:[
                "string",
                "boolean",
                "alert",
                "number"
            ]
        }
            correct:"alert"
        correct answer
        ```
    - Timer / Score                

    - Global Variables?
- timer/interval


# What kinds of actions does my application need to do?

 - EVERY ACTION CREATE A FUNCTION

 - Button to start quiz
 function startGame() { ... }
    - hide welcome message (select element and set Display to none, one liner not necessary to create a function)
     function hideWelcome() { ... }
    - Starts the Timer
     function startTimer() { ... }
    - display the next question
     function displayNextQuestion() { ... }

- answer a question
    - Buttons to select the answer options
    - display the next question
    - hover over the 
    - validate the user's choice
    - if choice is wrong, subtract time from the timer

- display the next question
- display answer result

- end the game
    - stop the timer from counting down (clearInterval function)
    - store user's initials and high score in leaderboard

- link to leaderboard
    - load the high scores
    - print them to the page
    - button to clear them out
