let correctUsername = "dkc09";
let correctPassword = "123456789";

let attempts = 0;
let maxAttempts = 3;

function login() {

    if (attempts >= maxAttempts) {
        window.alert("You are locked out. Too many failed attempts.");
        return;
    }

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === correctUsername && pass === correctPassword) {

        document.getElementById("result").innerHTML = "Access Granted";
        document.getElementById("result").style.color = "green";

        window.alert("Welcome! Login Successful.");

    
        window.location.href = "home.html";

    } else {
        attempts++;

        document.getElementById("result").innerHTML = "Access Denied";
        document.getElementById("result").style.color = "red";

        if (attempts >= maxAttempts) {
            window.alert("You are locked out after 3 failed attempts.");
        } else {
            window.alert("Invalid Username or Password. Attempts left: " + (maxAttempts - attempts));
        }
    }
}

function toggleInstructions() {
    let text = document.getElementById("instructions");

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        text.innerHTML = "Use username: dkc09 and password: 123456789 to login.";
    } else {
        text.style.display = "none";
    }
}


function logout() {
    window.alert("You have been logged out.");
    window.location.href = "index.html";
}