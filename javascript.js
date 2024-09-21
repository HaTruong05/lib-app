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
        const display = document.querySelector(".books");
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

        const info = document.createElement("p");
        newEntry.appendChild(info);
        info.textContent = `by ${book.author}, ${book.pages} pages, `;
        if (book.read) {
            info.textContent += "read";
        } else {
            info.textContent += "not read"
        }
    });
}

book1 = new Book('a', 'b', 100, true);
book2 = new Book('c', 'd', 12, false);
book3 = new Book('e', 'f', 14, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary(myLibrary);