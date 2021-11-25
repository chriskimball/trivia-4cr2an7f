var leaderboardEl = document.getElementById('leaderboard')
var backBtnEl = document.getElementById('backBtn')
var clearBtnEl = document.getElementById('clearBtn')

var leaderboard = []
var htmlTemplateString = "";

// initial page load function
function init() {

    // this will parse the todo array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    
    leaderboard.sort(function(a, b){
        var scoreA= a.totalScore;
        var scoreB= b.totalScore;
    return scoreB-scoreA
    })

    renderLeaderboard()
}

function backToWelcome(event) {
    if (!event.target.matches("#backBtn")){
        return
    }
    event.preventDefault();
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    window.location.href='index.html'
}

// Renders leaderboard upon leaderboard page load or update
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

    console.log(leaderboard)
    if (leaderboard.length === 0) {
        console.log(leaderboard)
        leaderboardEl.className= "hidden";
    } else {leaderboardEl.className= "displayed";}
}

// Clear out the leaderboard from local storage
function clearLeaderboard () {
    leaderboard = []
    leaderboardEl.children[1].innerHTML = "";
    console.log(leaderboard)
    
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    console.log(leaderboard)
    renderLeaderboard()
   
}

init()

backBtnEl.addEventListener( "click" , backToWelcome )
clearBtnEl.addEventListener( "click" , clearLeaderboard )

    