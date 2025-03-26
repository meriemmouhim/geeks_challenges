const allBooks = [
    {
        title: "twisted series (4)",
        author: "Ana Huang",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658944478i/61754236.jpg",
        alreadyRead: true //please erase my memory i wanna re-read this
    },
    {
        title: "Little Life",
        author: "hanya yanagihara",
        image: "https://products-images.di-static.com/image/hanya-yanagihara-a-little-life/9781447294832-475x500-1.webp",
        alreadyRead: false //wanna read and i actually have it but damn the author had a lot to say
    }
];
const bookSection = document.querySelector(".listBooks");
allBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    const titleAuthor = document.createElement("p");
    titleAuthor.textContent = `${book.title} written by ${book.author}`;
    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.style.width = "100px";
    bookDiv.appendChild(titleAuthor);
    bookDiv.appendChild(bookImage);
    if (book.alreadyRead) {
        titleAuthor.style.color = "red";
    }
    bookSection.appendChild(bookDiv);
});