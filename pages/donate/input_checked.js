window.addEventListener('DOMContentLoaded', function() {


    const input = document.querySelectorAll('.donation__input_radio');    
    const inputNumber = document.querySelector('.donation__form_wrapper-number-num');
    const donation = document.querySelector('.donation');
    const focusInput = document.querySelector('.donation__form_wrapper-number');
    const inputFocus = document.querySelector('.fa-dollar-sign');

    function changeValue(e) {
        console.log(e.target.value);
        input.forEach(item => {
            if(item.value === e.target.value) {                
                item.checked = true;
            }
            if (item.value !== e.target.value) {
                item.checked = false;
            }
        })
    }


    input.forEach(item => {
        item.addEventListener('click', (e) => {
            inputNumber.value = e.currentTarget.value;
        })
    })

    inputNumber.addEventListener('input', changeValue);

    donation.addEventListener('mousedown', (e) => {
        focusInput.classList.add('focus__input');
        inputFocus.classList.add('focus');
        inputNumber.style.color = 'green';
        if (e.target !== inputNumber) {
            focusInput.classList.remove('focus__input');
            inputFocus.classList.remove('focus');
            inputNumber.style.color = 'black';
        }        
    })


})