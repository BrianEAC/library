let myLibrary = [];


function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.id = myLibrary.length - 1;

}





function addBookToLibrary(){
    booksDiv = document.querySelector('#books');
    newBook = new Book();
    myLibrary.push(newBook);
    newBookElement= document.createElement('p');
    newBookElement.setAttribute('id', newBook.id);
    newBookElement.setAttribute('class', 'card');
    newBookElement.textContent = `${newBook.title},  ${newBook.author}, ${newBook.pages}, ${newBook.read}`;
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
newBookBtn.addEventListener('click', () => {
    form = document.querySelector('form');  
    form.setAttribute('class', 'visibleform');
})  


submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', () => {
    form.setAttribute('class', 'hiddenform');
    addBookToLibrary();
}); 
