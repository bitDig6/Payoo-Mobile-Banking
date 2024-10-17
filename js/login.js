// console.log('Button clicking file added');

// structure document.getElementById('btn-login').addEventListener('click', function(){});

// document.getElementById('btn-login').addEventListener('click', function(event){
//     event.preventDefault();
//     // console.log('login button clicked');

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber, pinNumber);

//     //this is temporary, you shouldn't do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in');
//     }else{
//         alert('Wrong Phone Number or Pin');
//     }
// });

document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    //get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    //bad way to validate or verify
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are logged in');
        window.location.href  = '/home.html'
    }else{
        alert('Wrong phone number or pin');
    }
});