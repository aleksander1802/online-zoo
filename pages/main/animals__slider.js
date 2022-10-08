window.addEventListener('DOMContentLoaded', function() {

    const animalButtonLeft = document.querySelector('.button__animals_left');
    const animalButtonRight = document.querySelector('.button__animals_right');
    const animalSlider = document.querySelector('.backstage__animals');
    const gridAnimalsSlider = document.querySelector('.backstage__animals_slider');
    
    function shuffle() {
        let arr = ['a','b','c','d','e','f', 'g', 'h'];
        
        let currentIndex = arr.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = temporaryValue;
        }
    
        let arr1 = arr.slice(0, 4).join(' ');
        let arr2 = arr.slice(4).join(' ');
    
        let random  = arr2.includes('a') ? "\'" +`${arr2}` + "\'" + " " + "\'" + `${arr1}` + "\'"  : "\'" +`${arr1}` + "\'" + " " + "\'" + `${arr2}` + "\'"    ;
        
        return random
    }
    
      const elem = document.querySelectorAll(".backstage__animals");
        
            elem.forEach(x => {
                animalButtonLeft.addEventListener("click", function() {
                
                x.style.gridTemplateAreas = shuffle();
            })
                animalButtonRight.addEventListener("click", function() {
                
                x.style.gridTemplateAreas = shuffle();
            })
        });
    
        let offset = 0;
    
        
    
        function sliderLeft()  {
           
            
            offset -= 1180
            
            gridAnimalsSlider.style.left = offset + 'px';
            
            
            
            setTimeout(() => {
    
                let rem = gridAnimalsSlider.removeChild(gridAnimalsSlider.firstChild) 
            
                gridAnimalsSlider.append(rem)
    
                setTimeout(() => {
                    if (offset <= 0) {
                        animalSlider.parentNode.lastElementChild.style.left = Math.abs(offset) + 1180  + 'px';
                        animalSlider.parentNode.firstElementChild.style.left = Math.abs(offset) + 'px';
                    }                
    
                    if (offset > 0) {
                    animalSlider.parentNode.lastElementChild.style.left = -offset + 1180  + 'px';
                    animalSlider.parentNode.firstElementChild.style.left = -offset + 'px';
                    }
                    animalSlider.parentNode.lastElementChild.style.opacity = 0;
                    animalSlider.parentNode.firstElementChild.style.opacity = 1;
                    
                }, 100)
    
                setTimeout(() => {
                    animalButtonLeft.disabled = false;
                }, 400)
    
                
    
                animalSlider.parentNode.lastElementChild.style.opacity = 1;
                animalButtonLeft.disabled = true;
                
    
            })
            
            animalSlider.parentNode.firstElementChild.style.zIndex = 100;
            animalSlider.parentNode.lastElementChild.style.zIndex = 10;
                
            
        }
    
        function sliderRight()  {
    
            offset += 1180
            
            gridAnimalsSlider.style.left = offset + 'px';
            
            
            
            setTimeout(() => {
    
                
    
                let rem = gridAnimalsSlider.removeChild(gridAnimalsSlider.firstChild) 
            
                gridAnimalsSlider.prepend(rem)
    
                setTimeout(() => {
                    if (offset >= 0) {
                        animalSlider.parentNode.lastElementChild.style.left = -offset - 1180  + 'px';
                        animalSlider.parentNode.firstElementChild.style.left = -offset + 'px';
                    }
                    if (offset < 0) {
                        animalSlider.parentNode.lastElementChild.style.left = -offset - 1180  + 'px';
                        animalSlider.parentNode.firstElementChild.style.left = -offset + 'px';
                    }
    
    
                    
                    animalSlider.parentNode.lastElementChild.style.opacity = 0;
                    animalSlider.parentNode.firstElementChild.style.opacity = 1;
                    
                }, 100)
    
                setTimeout(() => {
                    animalButtonRight.disabled = false;
                }, 400)
    
                
    
                animalSlider.parentNode.lastElementChild.style.opacity = 1;
                animalButtonRight.disabled = true;
    
                 animalSlider.parentNode.firstElementChild.style.zIndex = 100;
                 animalSlider.parentNode.lastElementChild.style.zIndex = 10;
    
            })
    
        
            
        }
    
    
         animalButtonLeft.addEventListener("click", sliderLeft);
         animalButtonRight.addEventListener("click", sliderRight);
         
         shuffle();


});

