var $ = function(id) {
    return document.getElementById(id);
};

var onLogin = function(event)  {
    event.preventDefault();

    var email = $('email').value;
    var password = $('pwd').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
    } else if (localStorage.getItem(email) !== password) {
        console.log(localStorage)
        alert('Invalid email or password.');
        window.location.href = "./registration.html";
    } else {
        // Check if email is valid
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email.');
        }

        // Check if password length is 8
        if (password.length != 8) {
            alert('Password should be 8 characters long.');
        } else {
            // Redirect to home page
            window.location.href = "./home.html"
            alert('Sucessfully Logged in.');
        }

    console.log(email);
    console.log(password);
}
};

window.onload = function() {
    $("login").onclick = onLogin;
}
