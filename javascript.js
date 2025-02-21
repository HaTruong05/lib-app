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
    lib.forEach(book => {
        const display = document.querySelector(".entries");
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

book1 = new Book('a', 'b', 100, true);
book2 = new Book('c', 'd', 12, false);
book3 = new Book('e', 'f', 14, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary(myLibrary);