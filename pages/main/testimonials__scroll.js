window.addEventListener('DOMContentLoaded', function() {

    const scrollInput = document.getElementById('test_slider');
    const scrollWrapper = document.querySelector('.testimonials__wrapper');
    
    function scroll(event) {

        const screenWidth = window.screen.width;

        const target = event.target;
        

        if (screenWidth > 1599) {
            if (target.value === '0') {
            
                scrollWrapper.style.left = 0 + 'px';
            }
            if (target.value === '1') {
                
                scrollWrapper.style.left = -290 + 'px';
            }
            if (target.value === '2') {
                
                scrollWrapper.style.left = -580 + 'px';
            }
            if (target.value === '3') {
                
                scrollWrapper.style.left = -870 + 'px';
            }
            if (target.value === '4') {
                
                scrollWrapper.style.left = -1160 + 'px';
            }
            if (target.value === '5') {
                
                scrollWrapper.style.left = -1450 + 'px';
            }
            if (target.value === '6') {
                
                scrollWrapper.style.left = -1740 + 'px';
            }
            if (target.value === '7') {
                
                scrollWrapper.style.left = -2030 + 'px';
            }            
        }

        if (screenWidth > 999 && screenWidth < 1600) {
            if (target.value === '0') {
            
                scrollWrapper.style.left = 0 + 'px';
            }
            if (target.value === '1') {
                
                scrollWrapper.style.left = -320 + 'px';
            }
            if (target.value === '2') {
                
                scrollWrapper.style.left = -645 + 'px';
            }
            if (target.value === '3') {
                
                scrollWrapper.style.left = -965 + 'px';
            }
            if (target.value === '4') {
                
                scrollWrapper.style.left = -1287 + 'px';
            }
            if (target.value === '5') {
                
                scrollWrapper.style.left = -1610 + 'px';
            }
            if (target.value === '6') {
                
                scrollWrapper.style.left = -1930 + 'px';
            }
            if (target.value === '7') {
                
                scrollWrapper.style.left = -2254 + 'px';
            }            
        }

        
    }
    
    scrollInput.addEventListener('input', scroll);

})

