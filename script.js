let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = myLibrary.length - 1;

}


function addBookToLibrary() {
    let inputTitle = document.getElementById('title').value;
    let inputAuthor = document.getElementById('author').value;
    let inputPages = document.getElementById('pages').value;
    let inputRead = document.getElementById('readstatus').checked ? 'read' : 'not read';
    if (!inputRead||!inputAuthor||!inputPages) {
        alert('forms should not be empty');
        return;
    }
    booksDiv = document.querySelector('#books');
    newBook = new Book();
    newBook.title = inputTitle;
    newBook.author = inputAuthor;
    newBook.pages = inputPages;
    newBook.read = inputRead;
    myLibrary.push(newBook);
    newBookElement = document.createElement('div');
    newBookElement.setAttribute('id', newBook.id);
    newBookElement.setAttribute('class', 'card')
    newBookTitle = document.createElement('p');
    newBookAuthor = document.createElement('p');
    newBookPages = document.createElement('p');
    newBookRead = document.createElement('p');
    newBookRead.setAttribute('id', 'read')
    newBookTitle.textContent = newBook.title;
    newBookAuthor.textContent = newBook.author;
    newBookPages.textContent = newBook.pages;
    newBookRead.textContent = newBook.read;
    booksDiv.appendChild(newBookElement);
    newBookElement.appendChild(newBookTitle);
    newBookElement.appendChild(newBookAuthor);
    newBookElement.appendChild(newBookPages);
    newBookElement.appendChild(newBookRead);
    form.reset();
    addRemoveBtn(newBook.id);
    addReadBtn();
}

function addRemoveBtn(id) {
    let thisId = id;
    removeBtn = document.createElement('button');
    removeBtn.setAttribute('id', id);
    removeBtn.textContent = 'Remove';
    newBookElement.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        let book = document.getElementById(thisId);
        book.remove();
    })
}

function addReadBtn(){
    readBtn = document.createElement('button');
    readBtn.textContent = 'read';
    newBookElement.appendChild(readBtn);
    readBtn.addEventListener('click', ()=>{
        newBookRead.textContent === 'read' ? newBookRead.textContent = 'not read' : newBookRead.textContent = 'read';
    })

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
