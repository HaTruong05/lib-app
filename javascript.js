const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary(lib) {
    const display = document.querySelector(".entries");
    display.innerHTML = '';
    lib.forEach(book => {
        const newEntry = document.createElement("div");
        newEntry.classList.add("entry");
        if (display.firstChild) {
            display.insertBefore(newEntry, display.firstChild);
        } else {
            display.appendChild(newEntry);
        }

        const title = document.createElement("h2");
        newEntry.appendChild(title);
        title.textContent = book.name;

        const author = document.createElement("p");
        author.textContent = `${book.author}`;
        const pages = document.createElement('p');
        pages.textContent = `${book.pages}`;
        const read = document.createElement('p');
        if (book.read) {
            read.textContent += "read";
        } else {
            read.textContent += "not read"
        }
        [author, pages, read].forEach(info => newEntry.appendChild(info));
    });
}

const newBookButton = document.getElementById('add-book');
const bookForm = document.getElementById('book-form');
const cancelButton = document.getElementById('cancel')
const addButton = document.getElementById('add')

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const fields = document.getElementsByClassName('fields')[0];
const warnText = document.createElement('p');
warnText.style.color = 'red';
warnText.textContent = "Can't leave title, author, or pages blank!";

newBookButton.addEventListener('click', () => {
    if(fields.contains(warnText)){
        fields.removeChild(warnText);
    }
    [title, author, pages, read].forEach(f => f.value = '');
    bookForm.showModal();
});

cancelButton.addEventListener('click', () => {
    bookForm.close();
})

addButton.addEventListener('click', () => {
    if (!title.value || !author.value || !pages.value) {
        fields.insertBefore(warnText, fields.firstChild);   
    } else {
        bookForm.close();
        newBook = new Book(title.value, author.value, pages.value, read.value);
        addBookToLibrary(newBook);
        displayLibrary(myLibrary);
    }
})

book1 = new Book('a', 'b', 100, true);
book2 = new Book('c', 'd', 12, false);
book3 = new Book('e', 'f', 14, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary(myLibrary);