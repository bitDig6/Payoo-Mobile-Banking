document.getElementById('btn-show-cash-out').addEventListener('click', function(){
   //show cash out form
    document.getElementById('cash-out-form').classList.remove('hidden');
    //hide add money form
    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    //show add money form
    document.getElementById('add-money-form').classList.remove('hidden');
    //hide cash out form
    document.getElementById('cash-out-form').classList.add('hidden');
});