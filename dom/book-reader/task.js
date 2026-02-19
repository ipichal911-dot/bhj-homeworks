const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    fontSizes.forEach(btn => {
      btn.classList.remove('font-size_active');
    });

    this.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = button.getAttribute('data-size');

    if (size === 'small') {
      book.classList.add('book_fs-small');
      } else if (size === 'big') {
          book.classList.add('book_fs-big');
        }
    });
});