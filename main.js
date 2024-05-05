// Book library
const myLibrary = [];


// Book constructor
function Book(author, title, pageCount, read)
{
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.read = read;
}


// Function to add book to library
function addBookToLibrary(myLibrary, book)
{
    myLibrary.push(book);
}

function displayBooks(myLibrary)
{
    for(let i = 0; i < myLibrary.length; i++)
    {
        console.log(myLibrary[i].title);
    }
}


// Function to create new book using user input
function createBook()
{
    let read;
    let author = prompt("Please enter arthor name.");
    let title = prompt("Please enter book title.");
    let pageCount = prompt("Please the number of pages");
    let hasRead = prompt("Has the book been read? (Yes or No)");

    if(hasRead == "Yes")
        read = true;
    else
        read = false;

    bookNew = new Book(author, title, pageCount, read);
    addBookToLibrary(myLibrary, bookNew);
}




