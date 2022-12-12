const button = document.querySelector(".Button");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const booksList = document.querySelector(".books");



const books = JSON.parse(localStorage.getItem('books-list')) || [];

function remove(i){
    //remove that button
   
}

function display(){
    if(books.length === 0) {booksList.innerText = 'No books in local storage'; return 0; }
let i =0;
  booksList.innerHTML = ''
  if(books.length!==0){
     books.forEach(book =>{
    booksList.innerHTML +=  `<div class='book'>
    title ${book.title} by <em> ${book.author}  </em><button onclick="remove(${i++})"> Remove </button> </div>
    `
    })
  }
}
display()
function callback(e){
    e.preventDefault();

    const book = {
        title: title.value,
        author: author.value
    }

  books.push(book)
  localStorage.setItem('books-list', JSON.stringify(books))
   
  display();

  title.value = ''
  author.value = ''
}


button.addEventListener('click', callback)

