
///// DATA /////
const myLibrary = [];







///// FUNCTIONS /////

// RENDER FUNCTIONS
function renderBooks(myLibrary)
{
    // Create and render every book
    for(let i = 0; i < myLibrary.length; i++)
    {
        // Get main container
        const main = document.getElementById("main");

        // Create book container
        const book = document.createElement("div");
        book.className = "book";

        // Create image
        const image = document.createElement("img");
        image.src = myLibrary[i].coverLink;

        // Create section2 container
        const section2 = document.createElement("div");
        section2.className = "section2";

        // Create title
        const title = document.createElement("h2");
        title.innerHTML = myLibrary[i].name;

        // Create author
        const author = document.createElement("p");
        author.innerHTML = myLibrary[i].author;
        author.className = "author"


        // Create pages
        const pages = document.createElement("p");
        pages.innerHTML = myLibrary[i].pageCount;
        pages.className = "pages"

        // Create tools div
        const tools = document.createElement("div");
        tools.className = "tools"

        // Create button
        const btn = document.createElement("button");
        btn.innerHTML = "Read";
        
        // Create images
        const heart = document.createElement("img");
        heart.src = "icons/heart.svg";
        const trash = document.createElement("img");
        trash.src = "icons/trash.svg";

        // Add children to book div
        book.appendChild(image);
        book.appendChild(section2);

        // Add children to section2 div
        section2.appendChild(title);
        section2.appendChild(author);
        section2.appendChild(pages);
        section2.appendChild(tools);

        // Add children to tools div
        tools.appendChild(btn);
        tools.appendChild(heart);
        tools.appendChild(trash);

        main.appendChild(book);
    }
}

// BOOK FUNCTIONS
// Constructor
function Book(name, author, pageCount, read, coverLink)
{
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.coverLink = coverLink;

    this.liked = false;
}

// Add book to library
function addBookToLibrary(name, author, pageCount, read, coverLink)
{
    let book = new Book(name, author, pageCount, read, coverLink);
    myLibrary.push(book);
}


// DIALOG FUNCTIONS
function showDialog()
{
    document.getElementById('modalBox').show();
}

function hideDialog()
{
    document.getElementById('modalBox').close();
}

addBookToLibrary("Hack The World", "RawrrzV", 145, true, "images/book1.jpg");
addBookToLibrary("V For Vandetta", "Error404", 120, true, "images/book2.jpg");
addBookToLibrary("V For Vandetta", "Error404", 120, true, "images/book2.jpg");
addBookToLibrary("V For Vandetta", "Error404", 120, true, "images/book2.jpg");
addBookToLibrary("V For Vandetta", "Error404", 120, true, "images/book2.jpg");
renderBooks(myLibrary);