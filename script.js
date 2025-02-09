function captureCredentials() {
    // Get the input values for username and password
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Log the credentials to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // Optionally, store credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Show an alert to confirm the credentials have been captured
    alert("Credentials captured: \nUsername: " + username + "\nPassword: " + password);
}