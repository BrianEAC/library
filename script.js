let myLibrary = [];


function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.id = myLibrary.length - 1;

}




function addBookToLibrary(){
    newBook = new Book();
    myLibrary.push(newBook);
    newBook.title = prompt('title:');
    newBook.author = prompt('author');
    newBook.pages = prompt('pages');
    newBook.read = prompt('read?');
    booksDiv = document.querySelector('#books');
    newBookElement= document.createElement('p');
    newBookElement.setAttribute('id', newBook.id);
    newBookElement.textContent = `${newBook.title}, ${newBook.author}, ${newBook.pages}, ${newBook.read}`;
    booksDiv.appendChild(newBookElement);
    addRemoveBtn(newBook.id);
    
}

function addRemoveBtn(id){
    let thisId = id;
    removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', id);
    removeBtn.textContent  = 'Remove';
    newBookElement.appendChild(removeBtn);
    removeBtn.addEventListener('click',() => {
        book = document.getElementById(thisId);
        book.textContent = '';
    } )

}


const newBookBtn = document.querySelector('#newbook');
newBookBtn.addEventListener('click', function(){
    addBookToLibrary();
    
})


