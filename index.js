document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".email");
  const passwordInput = document.querySelector(".password");
  const loginButton = document.querySelector(".clkbtn");

  loginButton.addEventListener("click", function () {
    // Dummy credentials (replace these with your own logic)
    const dummyUsername = "user@gmail.com";
    const dummyPassword = "pass123";

    // Get values from the form
    const enteredUsername = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // Check if credentials are valid
    if (enteredUsername === dummyUsername && enteredPassword === dummyPassword) {
      alert("Login successful!");
      // Redirect to home.html upon successful login
      window.location.href = "home.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});