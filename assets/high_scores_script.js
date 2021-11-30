// Storing html elements from High_Scores page to modify them
var leaderboardEl = document.getElementById('leaderboard')
var backBtnEl = document.getElementById('backBtn')
var clearBtnEl = document.getElementById('clearBtn')

// Declaring variables for us to use
var leaderboard = []
var htmlTemplateString = "";

// Initial page load function
function init() {

    // This will parse the leaderboard array from local storage from string into an array
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    
    if (leaderboard===null) {
        return leaderboard = []
    }
    // This will sort the leaderboard table by the total score
    leaderboard.sort(function(a, b){
        var scoreA= a.totalScore;
        var scoreB= b.totalScore;
    return scoreB-scoreA
    })

    renderLeaderboard()
}

// This funciton navigates the user back to the index.html if they click it and store the leaderboard into local storage
function backToWelcome(event) {
    if (!event.target.matches("#backBtn")){
        return
    }
    event.preventDefault();
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    window.location.href='index.html'
}

// Renders leaderboard upon leaderboard page load or leaderboard update
function renderLeaderboard() {
    htmlTemplateString = "";
    for(var i=0; i < leaderboard.length; i++) {
        
        //Template literal which will print out the leaderboard for each object within the localstorage array
        htmlTemplateString += `
        <tr class="leaderboard-list">
        <td>${leaderboard[i].initials}</td>
        <td>${leaderboard[i].timeLeft}</td>
        <td>${leaderboard[i].answeredCorrectly}</td>
        <td>${leaderboard[i].totalScore}</td>
        </tr>`; 
    }
    leaderboardEl.innerHTML += htmlTemplateString

    // If the leaderboard is blank (cleared out or no scores logged yet), the table will be hidden
    if (leaderboard.length === 0) {
        leaderboardEl.className= "hidden";
    } else {leaderboardEl.className= "displayed";}
}

// Clear out the leaderboard from local storage and re-rendering the blank leaderboard to the page
function clearLeaderboard () {
    leaderboard = []
    leaderboardEl.children[1].innerHTML = "";
    
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    renderLeaderboard()  
}

// Calling the initial page load function
init()

// Event listeners for clicks on the two buttons on the page
backBtnEl.addEventListener( "click" , backToWelcome )
clearBtnEl.addEventListener( "click" , clearLeaderboard )

    