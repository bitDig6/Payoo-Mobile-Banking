//console.log('home added');

document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault();

   const addMoneyInput = document.getElementById('input-add-money').value;
   console.log(addMoneyInput);

   const pinNumberInput = document.getElementById('input-pin-number').value;
   console.log(pinNumberInput);

   // wrong way to verify
   if(pinNumberInput === '1234'){
    console.log('Adding money to your account');

    const balance = document.getElementById('account-balance').innerText;
    console.log(balance);

    const addMoneyNumber = parseFloat(addMoneyInput);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance;
   }else{
    alert('Failed to add money. Please try again');
   }
});