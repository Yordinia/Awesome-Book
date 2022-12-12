const button = document.querySelector(".Button");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const booksList = document.querySelector(".books");

//form.preventDefault();


const books = [];


function callback(e){
    e.preventDefault();

    const book = {
        title: title.value,
        author: author.value
    }
//localStorage.setItem('book-value', JSON.stringify(book))
    
    console.log('created book',book)
}


button.addEventListener('click', callback)

