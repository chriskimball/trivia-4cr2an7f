var leaderboardEl = document.getElementById('leaderboard')
var backBtnEl = document.getElementById('backBtn')
var clearBtnEl = document.getElementById('clearBtn')

var leaderboard = []


function init() {
    // TODO: What is the purpose of the following line of code?
    // this will parse the todo array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    // TODO: Describe the functionality of the following `if` statement.
    // if local storage is not blank then it will set the stored todos to the todos variable
    if (leaderboard !== null) {
      leaderboard = leaderboard;
    }

    // TODO: Describe the purpose of the following line of code.
    // runs the render todo function which will display your todo array on the page
    // renderTodos();
    console.log(leaderboard)
  }

init()

function backToWelcome(event) {
    if (!event.target.matches("#backBtn")){
        return
    }
    event.preventDefault();
    // var userStats = {
    //     initials: initials.value,
    //     timeLeft: timeLeft,
    //     answeredCorrectly: correct,
    //     totalScore: finalScore
    //   }
      
    //   leaderboard = leaderboard.concat(userStats)
      // Set new submission to local storage 
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    
      window.location.href='index.html'
}

leaderboardEl.addEventListener( "click" , backToWelcome)


// // TODO: render leaderboard upon submission and leaderboard page load
// function renderLeaderboard() {
//         // TODO: Describe the functionality of the following two lines of code.
//         // defines the todo list's inner html as string values
//         // increments the number of items on your todo list to equal the todo array length
//         todoList.innerHTML = "";
//         todoCountSpan.textContent = todos.length;
        
//         // TODO: Describe the functionality of the following `for` loop.
//         // converts todo array into list items on the todo list
//         for (var i = 0; i < todos.length; i++) {
//           var todo = todos[i];
      
//           var li = document.createElement("li");
//           li.textContent = todo;
//           li.setAttribute("data-index", i);
      
//           var button = document.createElement("button");
//           button.textContent = "Complete ✔️";
      
//           li.appendChild(button);
//           todoList.appendChild(li);
//         }
//       }
// }

// TODO: clear out the leaderboard from local storage
// function clearLeaderboard () {
    
// }