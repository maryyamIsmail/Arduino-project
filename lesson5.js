document.getElementById("submit-button").addEventListener("click", function() {
    var feedbackText = document.getElementById("feedback-text").value;
    
    
    alert("Thank you for your feedback:\n" + feedbackText);
    
    // Optionally, clear the textarea after submission
    document.getElementById("feedback-text").value = "";
  });
  