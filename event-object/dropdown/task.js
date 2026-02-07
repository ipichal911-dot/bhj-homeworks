const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  const dropdownList = dropdown.querySelector('.dropdown__list');
    
  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
    });
    
    dropdownLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedText = this.textContent;
        dropdownValue.textContent = selectedText;
        dropdownList.classList.remove('dropdown__list_active');
    });
});
})


function closeAllDropdowns(currentDropdown) {
  dropdowns.forEach(dropdown => {
    if (dropdown !== currentDropdown) {
      const dropdownList = dropdown.querySelector('.dropdown__list');
      dropdownList.classList.remove('dropdown__list_active');
      }
    });
}

document.addEventListener('click', function(event) {
    
    const isDropdownClick = event.target.closest('.dropdown');
    
    if (!isDropdownClick) {
        dropdowns.forEach(dropdown => {
          const dropdownList = dropdown.querySelector('.dropdown__list');
          dropdownList.classList.remove('dropdown__list_active');
        });
    }
})