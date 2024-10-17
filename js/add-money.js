/**
 * 1. add event listener to the add money button (form submit)
 *  Make sure to add preventDefault so that the page doesn't reload
 * 2. Get the money user wants to add and
 * also, get the pin number provided
 * 3. verify the pin number, for wrong pin number ---> failed to add
 * for right pin number, allow to add the number to the account balance
 * 4. get the current balance
 * 5. add money to be added with the current balance
 * 6. display or update the balance in the DOM / UI
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const pinNumberInput = document.getElementById('input-pin-number').value;
    const balance = document.getElementById('account-balance').innerText;
    // console.log(addMoneyInput, pinNumberInput, balance);

    if(pinNumberInput === '1234'){
        //get add money, pin and current balance
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;

        //update the DOM with updated balance
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Failed to add money. Please try again later');
    }
});