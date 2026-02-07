const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(tabsContainer => {
  const tabButtons = tabsContainer.querySelectorAll('.tab');
  const tabContents = tabsContainer.querySelectorAll('.tab__content');
    
tabButtons.forEach((tabButton, buttonIndex) => {
        tabButton.addEventListener('click', () => {
          tabButtons.forEach(btn => {
              btn.classList.remove('tab_active');
            })
            tabButton.classList.add('tab_active');
          
          tabContents.forEach(content => {
                content.classList.remove('tab__content_active');
            })
           
          tabContents[buttonIndex].classList.add('tab__content_active');
        });
    });
})