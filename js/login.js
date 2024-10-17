// console.log('Button clicking file added');

// structure document.getElementById('btn-login').addEventListener('click', function(){});

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);
});