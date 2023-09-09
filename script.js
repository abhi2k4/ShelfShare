const bookForm = document.getElementById('book-form');

bookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const price = document.getElementById('price').value;

  
  console.log('Book added:', title, author, price);

  bookForm.reset();
});


