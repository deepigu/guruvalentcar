document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("background-audio");
    var shine = document.getElementById("shine");
    var message = document.getElementById("message");
    var nextPageDiv = document.getElementById("nextPage");

    function playAudio() {
        if (audio.paused) {
            audio.volume = 1.0; 
            audio.play().catch(error => console.error("Audio play failed:", error));
        }
    }

    function stopAudio() {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    // Function to open the card
    window.opencard = function () {
        shine.style.display = "none"; 
        message.style.display = "block"; 
        playAudio(); 
    };

    // Function to move to the next page
    window.nextPage = function () {
        message.style.display = "none";
        nextPageDiv.style.display = "block";
    };

    // Function to close the card and stop audio
    window.closecard = function () {
        nextPageDiv.style.display = "none";
        shine.style.display = "block"; 
        stopAudio();
    };

    // Ensure audio starts playing when the user interacts with the page
    document.addEventListener("click", function () {
        playAudio();
    });
});
