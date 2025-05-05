// Retrieve stored votes from localStorage
let votes = JSON.parse(localStorage.getItem('votes')) || { Alice: 0, Bob: 0, Charlie: 0 };
let totalVotes = JSON.parse(localStorage.getItem('totalVotes')) || 0;

// Display the vote counts
document.getElementById('aliceCount').textContent = votes.Alice;
document.getElementById('bobCount').textContent = votes.Bob;
document.getElementById('charlieCount').textContent = votes.Charlie;
document.getElementById('totalVotes').textContent = totalVotes;

// Voting countdown timer
let timer = 60;  // Timer in seconds
const countdown = setInterval(function() {
    if (timer <= 0) {
        clearInterval(countdown);
        document.getElementById('timer').textContent = "Voting time is up!";
    } else {
        document.getElementById('timer').textContent = `Time Remaining: ${timer} seconds`;
        timer--;
    }
}, 1000);
