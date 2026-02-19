const revealElements = document.querySelectorAll('.reveal');
  
function checkVisibility() {
  revealElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
    if (isVisible) {
      element.classList.add('reveal_active');
      } else {
      element.classList.remove('reveal_active');
      }
        })
    }
    
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
