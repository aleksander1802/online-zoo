const donateLength = document.querySelector('.donation__form_wrapper-number-num');

const donationButton = document.querySelector('.donation__form_wrapper-button');

donationButton.addEventListener('click', (event) => {
    event.preventDefault();
})

donateLength.oninput = function(){
    this.value = this.value.slice(0, 4);
}