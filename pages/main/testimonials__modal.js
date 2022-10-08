window.addEventListener('DOMContentLoaded', function() {

    const modal = document.querySelectorAll('.testimonials__modal');
    const testimonials = document.querySelector('.testimonials');
    const testimonialsClose = document.querySelectorAll('.modal__testimonials_close');
 
    const firstModal = document.querySelector('.modal__show_first');
    const secondModal = document.querySelector('.modal__show_second');
    const thirdModal = document.querySelector('.modal__show_third');
    
    const modalShow = (event) => {

        const screenWidth = window.screen.width;

        if (screenWidth < 1000) {
            testimonials.classList.add('fade');

            if (event.currentTarget.id === 'modal__first') {
                firstModal.classList.remove('hide');
            }

            if (event.currentTarget.id === 'modal__second') {
                secondModal.classList.remove('hide');
            }

            if (event.currentTarget.id === 'modal__third') {
                thirdModal.classList.remove('hide');
            }
        }
        
    }

    function closeModal() {
        testimonials.classList.remove('fade');
        firstModal.classList.add('hide');
        secondModal.classList.add('hide');
        thirdModal.classList.add('hide');
    }

    modal.forEach(item => {
        item.addEventListener('click', modalShow);
    })

    testimonials.addEventListener('click', (e) => {
        if (e.target === testimonials) {
            closeModal();
        }
    })

    testimonialsClose.forEach(item => {
        item.addEventListener('click', closeModal);
    })



})

