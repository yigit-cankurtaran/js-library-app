class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let myLibrary = [];
let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addBookToLibrary);
