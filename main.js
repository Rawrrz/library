
///// DATA /////
let book1 = new Book("Hack The World", "RawrrzV", 145, true, "images/book1.jpg");
let book2 = new Book("V For Vandetta", "Error404", 120, true, "images/book2.jpg");
const library = [book1, book2];
const main = document.getElementById("main");
const search = document.getElementById("searchInput");
let searchValue = "";

// Tags
const tagList = document.getElementsByClassName("tag");
let selectedTag = "All";


///// FUNCTIONS /////

// Search event listener
search.addEventListener("input", () =>
{
    searchValue = search.value;
    clearAndRender();
});

// RENDER FUNCTIONS
function renderBooks(tag, searchResult)
{
    for(let i = 0; i < library.length; i++)
        library[i].index = i;

    const myLibrary = library.filter((item) => {
        if(item.name.toLowerCase().startsWith(searchResult.toLowerCase()))
        {
            if(tag === "All")
                return item;
            else if(tag === "Liked" )
                return item.liked;
            else if(tag === "Unread")
                return !item.read;
            else if(tag === "Read")
                return item.read;
        }
    });

    console.log(myLibrary);

    // Create and render every book
    for(let i = 0; i < myLibrary.length; i++)
    {
        // Create book container
        const book = document.createElement("div");
        book.className = "book";

        // Create image
        const image = document.createElement("img");
        image.src = myLibrary[i].coverLink;
        image.alt = "book-cover";

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
        pages.innerHTML = myLibrary[i].pageCount + " pages";
        pages.className = "pages"

        // Create tools div
        const tools = document.createElement("div");
        tools.className = "tools"

        // Create button
        const btn = document.createElement("button");
        if(myLibrary[i].read == true)
            btn.innerHTML = "Read";
        else
            btn.innerHTML = "Unread";

        btn.addEventListener("click", ()=>
        {
            if(myLibrary[i].read)
            {
                myLibrary[i].read = false;
                btn.innerHTML = "unread";
            }
            else
            {
                myLibrary[i].read = true;
                btn.innerHTML = "read";
            }
            clearAndRender();
        })
        
        // Create images
        const heart = document.createElement("img");
        heart.src = "icons/heart.svg";
        if(myLibrary[i].liked)
            heart.classList.toggle("liked");

        heart.addEventListener("click", () => {
            if(!myLibrary[i].liked)
            {
                heart.classList.toggle("liked");
                myLibrary[i].liked = true;
            }
            else
            {
                heart.classList.toggle("liked");
                myLibrary[i].liked = false;
            }

            clearAndRender();
        });


        const trash = document.createElement("img");
        trash.src = "icons/trash.svg";

        trash.addEventListener("click", () =>
        {
            library.splice(library[myLibrary[i].index], 1);
            const size = main.classList.length;
            // Clear main
            while(main.children.length > 1)
            {
                main.removeChild(main.children[1]);
            }
            clearAndRender();
        });

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
    this.index;
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.coverLink = coverLink;

    this.liked = false;
}

// Add book to library
function addBookToLibraryJS(name, author, pageCount, read, coverLink)
{
    let book = new Book(name, author, pageCount, read, coverLink);
    myLibrary.push(book);
}

// Add book to library via form
function addBookToLibrary()
{
    const formTitle = document.getElementById("formTitle").value;
    document.getElementById("formTitle").value = "";
    const formAuthor = document.getElementById("formAuthor").value;
    document.getElementById("formAuthor").value = "";
    const formCoverLink = document.getElementById("formCoverLink").value;
    document.getElementById("formCoverLink").value = "";

    const pageCount = document.getElementById("pageCount").value;
    document.getElementById("pageCount").value = "";

    const haveRead = document.getElementById("haveRead").checked;
    document.getElementById("haveRead").checked = false;

    let book = new Book(formTitle, formAuthor, pageCount, haveRead, formCoverLink);
    myLibrary.push(book);

    console.log(book);
    hideDialog();

    while(main.children.length > 1)
    {
        main.removeChild(main.children[1]);
    }

    renderBooks(selectedTag);
}

// Event Listeners For Tags
function setTag(tagValue)
{
    let selected;

    if(tagValue == "All")
    {
        selected = 0;
    }
    else if(tagValue == "Liked")
    {
        selected = 1;
    }
    else if(tagValue == "Unread")
    {
        selected = 2;
    }
    else
    {
        selected = 3;
    }

    tagList[selected].classList.toggle("selected");

    for(let i = 0; i < tagList.length; i++)
    {
        if(i !== selected)
            tagList[i].classList.remove("selected");
    }
}

function clearAndRender()
{
    // Clear main
    while(main.children.length > 1)
        {
            main.removeChild(main.children[1]);
        }
    
    // Rerender main
    renderBooks(selectedTag, searchValue);
}

tagList[0].addEventListener("click", () => {
    setTag("All");
    selectedTag = "All";

    clearAndRender();
});
tagList[1].addEventListener("click", () => {
    setTag("Liked");
    selectedTag = "Liked";

    clearAndRender();
});
tagList[2].addEventListener("click", () => {
    setTag("Unread");
    selectedTag = "Unread";

    clearAndRender();
});
tagList[3].addEventListener("click", () => {
    setTag("Read");
    selectedTag = "Read";

    clearAndRender();
});


// DIALOG FUNCTIONS
function showDialog()
{
    document.getElementById('modalBox').show();
}

function hideDialog()
{
    document.getElementById('modalBox').close();
}

///// MAIN PROGRAM /////
setTag("All");
renderBooks(selectedTag, searchValue);