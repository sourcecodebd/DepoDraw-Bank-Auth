// user details

const userlist = [];
var retrieved = localStorage.getItem('userEmail');
userlist.push(JSON.parse(retrieved));
console.log('User details: ', userlist);
var user = document.getElementById('userEmail');
user.innerText = JSON.parse(retrieved);

// routing
if (retrieved == null) {
    window.location.href = 'index.html'
}

//logout
logout.addEventListener('click', function () {
    var removed = localStorage.removeItem('userEmail');
    var logout = document.getElementById('logout');
    logout = removed;
})


// handle deposit and withdraw event

// deposit

document.getElementById('deposit-submit').addEventListener('click', function () {
    if ((!/^[0-9]+$/.test(document.getElementById('deposit-input').value))) {
        const warning = document.getElementById('deposit-warning');
        warning.innerText = 'Please Enter a number!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if ((document.getElementById('deposit-input').value.length) >= 15) {
        const warning = document.getElementById('deposit-warning');
        warning.innerText = 'Please Enter a number less than 15 digits!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else {
        const depositInput = document.getElementById('deposit-input');
        const newDeposit = depositInput.value;

        const depositAmount = document.getElementById('deposit-amount');
        const previousDeposit = depositAmount.innerText;
        depositAmount.innerText = parseFloat(previousDeposit) + parseFloat(newDeposit);
        depositInput.value = '';

        // total balance
        const balance = document.getElementById('balance');
        balance.innerText = parseFloat(balance.innerText) + parseFloat(newDeposit);
    }
})

// withdraw
document.getElementById('withdraw-submit').addEventListener('click', function () {
    if ((!/^[0-9]+$/.test(document.getElementById('withdraw-input').value))) {
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'Please Enter a number!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if (parseFloat(document.getElementById('withdraw-input').value) >= parseFloat(document.getElementById('balance').innerText)) {
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'You cannot withdraw because of insufficient balance!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else if ((document.getElementById('withdraw-input').value.length) >= 15) {
        console.log((document.getElementById('withdraw-input').value.length));
        const warning = document.getElementById('withdraw-warning');
        warning.innerText = 'Please Enter a number less than 15 digits!';
        setTimeout(function () {
            warning.innerText = '';
        }, 7000)
    }
    else {
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdraw = withdrawInput.value;

        const withdrawAmount = document.getElementById('withdraw-amount');
        const previousWithdraw = withdrawAmount.innerText;
        withdrawAmount.innerText = parseFloat(previousWithdraw) + parseFloat(newWithdraw);
        withdrawInput.value = '';

        // total balance
        const balance = document.getElementById('balance');
        balance.innerText = parseFloat(balance.innerText) - parseFloat(newWithdraw);
    }
})