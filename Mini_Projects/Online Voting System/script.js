// Initialize vote counts from localStorage or set default values
let votes = JSON.parse(localStorage.getItem('votes')) || { Alice: 0, Bob: 0, Charlie: 0 };
let totalVotes = JSON.parse(localStorage.getItem('totalVotes')) || 0;

// Handle vote submission
document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected candidate
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

    // If no candidate is selected, return
    if (!selectedCandidate) {
        alert('Please select a candidate to vote for.');
        return;
    }

    // Increment the selected candidate's vote count
    const candidateName = selectedCandidate.value;
    votes[candidateName]++;
    totalVotes++;

    // Save votes in localStorage to persist data across pages
    localStorage.setItem('votes', JSON.stringify(votes));
    localStorage.setItem('totalVotes', JSON.stringify(totalVotes));

    // Display a confirmation message
    document.getElementById('message').textContent = `Thank you for voting for ${candidateName}!`;

    // Redirect to the dashboard to view results
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1500); // Delay to show the confirmation message before redirect
});
