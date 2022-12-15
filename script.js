/* eslint-disable no-unused-vars */

const button = document.querySelector('.Button');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const booksList = document.querySelector('.books');

const books = JSON.parse(localStorage.getItem('books-list')) || [];
const tbody = document.createElement('tbody');

const date = new Date();
const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
document.querySelector('.date').innerHTML = `${date.toDateString()}, ${time}`;

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static callback(e) {
    e.preventDefault();

    const book = new Books(title.value, author.value);

    books.push(book);
    localStorage.setItem('books-list', JSON.stringify(books));

    Books.display();
    document.querySelector('.form').reset();
    // instead of this use form reset
    // title.value = '';
    // author.value = '';
    title.focus();  // to get curser standby at title input
  }

  static display() {
    if (books.length === 0) {
      booksList.innerText = 'No books in local storage';
      return 0;
    }
    let i = 0;
    tbody.innerHTML = '';
    if (books.length !== 0) {
      books.forEach((book) => {
        tbody.innerHTML += `
      <tr class='book'>
        <td><strong>"${book.title}"</strong> by <em>${book.author}</em></td>
        <td><button onclick="Books.remove(${i})" class='btn btn-outline-primary'> Remove </button> </td> 
      </tr>
      `; 
        i += 1;
        booksList.appendChild(tbody); // changed div to table row <tr> add table datas <td> removed hr, br, added btn btn-outline-primary class to button 
      });
    }
    return 0;
  }

  static remove(i) {
    const x = document.querySelectorAll('.book')[i];
    console.log(x)
    tbody.removeChild(x);
    books.splice(i, 1);
    localStorage.setItem('books-list', JSON.stringify(books));
    Books.display();
  }
}

Books.display();
button.addEventListener('click', Books.callback);
