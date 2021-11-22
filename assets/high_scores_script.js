var leaderboardEl = document.getElementById('leaderboard')
var backBtnEl = document.getElementById('backBtn')
var clearBtnEl = document.getElementById('clearBtn')

var leaderboard = []
var htmlTemplateString = "";

function init() {
    // TODO: What is the purpose of the following line of code?
    // this will parse the todo array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    
    leaderboard.sort(function(a, b){
        var scoreA= a.totalScore;
        var scoreB= b.totalScore;
    return scoreB-scoreA
    })
    console.log(leaderboard)
    // TODO: Describe the functionality of the following `if` statement.
    // if local storage is not blank then it will set the stored todos to the todos variable
    if (leaderboard !== null) {
      leaderboard = leaderboard;
    }

    // TODO: Describe the purpose of the following line of code.
    // runs the render todo function which will display your todo array on the page
    // renderTodos();
    console.log(leaderboard)
    renderLeaderboard()
  }

init()

function backToWelcome(event) {
    if (!event.target.matches("#backBtn")){
        return
    }
    event.preventDefault();
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    window.location.href='index.html'
}

backBtnEl.addEventListener( "click" , backToWelcome )
clearBtnEl.addEventListener( "click" , clearLeaderboard )


// TODO: render leaderboard upon submission and leaderboard page load
function renderLeaderboard() {
    htmlTemplateString = "";
    for(var i=0; i < leaderboard.length; i++) {

        //back ticks for template literals is key
        htmlTemplateString += `
            <tr>
                <td>${leaderboard[i].initials}</td>
                <td>${leaderboard[i].timeLeft}</td>
                <td>${leaderboard[i].answeredCorrectly}</td>
                <td>${leaderboard[i].totalScore}</td>
            </tr>`; 
    }
    leaderboardEl.innerHTML += htmlTemplateString
}
    

// TODO: clear out the leaderboard from local storage
function clearLeaderboard () {
    leaderboard = []
    leaderboardEl.children[1].innerHTML = "";
    console.log(leaderboard)
    
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    console.log(leaderboard)
    renderLeaderboard()
}