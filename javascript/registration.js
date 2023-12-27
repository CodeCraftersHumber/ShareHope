var $ = function(id) {
    return document.getElementById(id);
};

var onRegister = function(event)  {
    event.preventDefault();
    var firstname = $('firstname').value;
    var lastname = $('lastname').value;
    var email = $('email').value;
    var password = $('pwd').value;
    var phone = $('phone').value;

if (!firstname || !lastname || !email || !password || !phone) {
    alert('Please fill in all fields.');
} else if (localStorage.getItem(email)) {
    alert('User already registered.');
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
    localStorage.setItem(email, password);
    alert('Registration successful.');
    window.location.href = "./login.html";
}
    console.log(window.location.href);
    console.log(email);
    console.log(password);
    console.log(firstname);
    console.log(lastname);
    console.log(phone);
}
};

window.onload = function() {
    $("register").onclick = onRegister;
}

