document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values from input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation (you can add more complex validation)
    if (username === "admin" && password === "123") {
      alert("Login successful!"); // Replace with your login logic
    } else {
      document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
  });