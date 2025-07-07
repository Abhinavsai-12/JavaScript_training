document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "Admin" && password === "Admin@123") {
    // Redirect to the next page
    window.location.href = "../registration/Students_list.html";
  } else {
    document.getElementById("error").innerHTML = "Invalid username or password.";
  }
});