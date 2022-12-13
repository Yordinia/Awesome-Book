/* eslint-disable no-unused-vars */

const button = document.querySelector('.Button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const booksList = document.querySelector('.books');

const books = JSON.parse(localStorage.getItem('books-list')) || [];

function display() {
  if (books.length === 0) {
    booksList.innerText = 'No books in local storage';
    return 0;
  }
  let i = 0;
  booksList.innerHTML = '';
  if (books.length !== 0) {
    books.forEach((book) => {
      booksList.innerHTML += `<div class='book'>
    <strong>Title:</strong> ${book.title} <br />
    <strong>Author:</strong> ${book.author} 
    <br/><button onclick="remove(${i})"> Remove </button> </div> <br /><hr>
    `;
      i += 1;
    });
  }
  return 0;
}

function remove(i) {
  const x = document.querySelectorAll('.book')[i];
  booksList.removeChild(x);
  books.splice(i, 1);
  localStorage.setItem('books-list', JSON.stringify(books));
  display();
}

display();
function callback(e) {
  e.preventDefault();

  const book = {
    title: title.value,
    author: author.value,
  };

  books.push(book);
  localStorage.setItem('books-list', JSON.stringify(books));

  display();

  title.value = '';
  author.value = '';
}

button.addEventListener('click', callback);
