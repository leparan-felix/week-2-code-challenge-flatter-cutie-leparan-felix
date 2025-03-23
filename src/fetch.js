document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:3000/characters";
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const nameElement = document.getElementById("name");
    const imageElement = document.getElementById("image");
    const voteCount = document.getElementById("vote-count");
    const votesForm = document.getElementById("votes-form");
    
    
    // Fetch all characters and display their names
    fetch(baseUrl)
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const span = document.createElement("span");
                span.textContent = character.name;
                span.style.cursor = "pointer";  // Make it look clickable
                span.addEventListener("click", () => displayCharacter(character));
                characterBar.appendChild(span);
            });
        });

    // Function to display character details
    function displayCharacter(character) {
        nameElement.textContent = character.name;
        imageElement.src = character.image;
        imageElement.alt = character.name;
        voteCount.textContent = character.votes;
        imageElement.dataset.id = character.id; // Store ID for later use
    }

    // Handle votes form submission
    votesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const votesInput = document.getElementById("votes");
        const newVotes = parseInt(votesInput.value) || 0;
        const currentVotes = parseInt(voteCount.textContent);
        voteCount.textContent = currentVotes + newVotes;
        votesInput.value = ""; // Clear input field
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const voteForm = document.getElementById("votes-form");
    const voteInput = document.getElementById("votes");
    const voteCount = document.getElementById("vote-count");
    const resetButton = document.getElementById("reset-btn");
  
    let totalVotes = 0; // Initialize votes count
  
    // Function to add votes
    voteForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page refresh
      const votesToAdd = parseInt(voteInput.value); // Convert input to a number
  
      if (!isNaN(votesToAdd) && votesToAdd > 0) {
        totalVotes += votesToAdd; // Add votes
        voteCount.textContent = totalVotes; // Update the DOM
        voteInput.value = ""; // Clear input field
      } else {
        alert("i was clicked");
      }
    });
  
    // Function to reset votes
    resetButton.addEventListener("click", () => {
      totalVotes = 0; // Reset votes to 0
      voteCount.textContent = totalVotes; // Update the DOM
    });
  });
  

