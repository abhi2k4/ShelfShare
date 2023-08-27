const bookForm = document.getElementById('book-form');

bookForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const price = document.getElementById('price').value;

  // Here you can send this data to the server using AJAX or fetch API
  // to store it in the database.
  
  console.log('Book added:', title, author, price);
  
  // Clear form inputs
  bookForm.reset();
});
