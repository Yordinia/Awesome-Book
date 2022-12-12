const button = document.querySelector(".Button");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const booksList = document.querySelector(".books");



const books = JSON.parse(localStorage.getItem('books-list')) || [];


function callback(e){
    e.preventDefault();

    const book = {
        title: title.value,
        author: author.value
    }

  books.push(book)
  localStorage.setItem('books-list', JSON.stringify(books))
   
  booksList.innerHTML = ''
    books.forEach(book =>{
    booksList.innerHTML +=  `
    title ${book.title} by <em> ${book.author}  </em> <br> <br>
    `
})
  

}


button.addEventListener('click', callback)
