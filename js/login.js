// registration
const user = [];
document.getElementById('register-submit').addEventListener('click', function (e) {
    e.preventDefault();
    //get user email
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    //check email and password authentication
    if (user.indexOf(userEmail) == -1 && userEmail != '' && userPassword != '') {
        user.push(userEmail, userPassword);
        console.log(user);
        alert('You have successfully registered!')
        // localStorage.setItem('userEmail', JSON.stringify(userEmail));
        // window.location.href = 'banking.html';
    }
    else if (userEmail == '') {
        alert('Email field is required!')
    }
    else if (userPassword == '') {
        alert('Password field is required!')
    }
    else {
        alert('You have already registered')
    }

});


// Login
document.getElementById('login-submit').addEventListener('click', function (e) {
    e.preventDefault();
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    //check email and password authentication
    if (((user.indexOf(userEmail)) != -1) && ((user.indexOf(userPassword)) != -1)) {
        localStorage.setItem('userEmail', JSON.stringify(userEmail));
        window.location.href = 'banking.html';
    }
    // if (userEmail == 'nafi@gmail.com' && userPassword == '123') {
    //     localStorage.setItem('userEmail', JSON.stringify(userEmail));
    //     window.location.href = 'banking.html';
    // }
    else if (userEmail == '') {
        alert('Email field is required!')
    }
    else if (userPassword == '') {
        alert('Password field is required!')
    }
    else {
        alert('Authentication failed! Please try again with existing account')
    }

});

if (localStorage.getItem('userEmail') != null) {
    window.location.href = 'banking.html'
}