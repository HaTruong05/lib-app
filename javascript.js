const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
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
        
        const bookButtons = document.createElement('div');
        bookButtons.classList.add('bookButtons')

        const removeButton = document.createElement('button');
        removeButton.textContent = '❌';
        removeButton.classList.add('bookButton');

        // Remove book associated with the button
        removeButton.addEventListener('click', () => {
            newEntry.remove();
            const i = myLibrary.findIndex(b => b.id === book.id);
            myLibrary.splice(i, 1);
        })

        const readButton = document.createElement('button')
        readButton.classList.add('bookButton');
        readButton.textContent = '✅';

        readButton.addEventListener('click', () => {
            if (read.textContent !== 'read') {
                read.textContent = 'read';
                const i = myLibrary.findIndex(b => b.id === book.id);
                myLibrary[i].read = true;
            }
        })
        
        bookButtons.appendChild(readButton);
        bookButtons.appendChild(removeButton);
        newEntry.appendChild(bookButtons);
        
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
    [title, author, pages].forEach(f => f.value = '');
    read.checked = false;
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
        newBook = new Book(title.value, author.value, pages.value, read.checked);
        addBookToLibrary(newBook);
        displayLibrary(myLibrary);
    }
})

const books = [
  new Book('The Road', 'Cormac McCarthy', 287, false),
  new Book('The Name of the Wind', 'Patrick Rothfuss', 662, false),
  new Book('Harry Potter and the Sorcerer’s Stone', 'J.K. Rowling', 309, false),
  new Book('Pride and Prejudice', 'Jane Austen', 279, false),
  new Book('Moby Dick', 'Herman Melville', 635, false),
  new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, false),
  new Book('Fahrenheit 451', 'Ray Bradbury', 194, false),
  new Book('The Catcher in the Rye', 'J.D. Salinger', 214, false),
  new Book('The Hobbit', 'J.R.R. Tolkien', 310, false),
  new Book('To Kill a Mockingbird', 'Harper Lee', 281, false),
  new Book('1984', 'George Orwell', 328, false),
  new Book('Bloodmarked', 'Tracy Deonn', 400, true),
  new Book('Legendborn', 'Tracy Deonn', 403, true),
  new Book('Percy Jackson & the Olympians: The Last Olympian', 'Rick Riordan', 381, true),
  new Book('Percy Jackson & the Olympians: The Battle of the Labyrinth', 'Rick Riordan', 361, true),
  new Book('Percy Jackson & the Olympians: The Titan’s Curse', 'Rick Riordan', 312, true),
  new Book('Percy Jackson & the Olympians: The Sea of Monsters', 'Rick Riordan', 279, true),
  new Book('Percy Jackson & the Olympians: The Lightning Thief', 'Rick Riordan', 377, true),
  new Book('Do Androids Dream of Electric Sheep?', 'Philip K. Dick', 210, true),
  new Book('Dune', 'Frank Herbert', 412, true),
];

books.forEach(book => addBookToLibrary(book));
displayLibrary(myLibrary);