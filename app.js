document.addEventListener("DOMContentLoaded", () => {
  // Get elements from HTML
  const newBookBtn = document.getElementById("new-book-btn");
  const myLibrary = document.getElementById("my-library");
  const newBookForm = document.getElementById("new-book-form");
  const bookNameInput = document.getElementById("book-name");
  const pagesInput = document.getElementById("pages");

  // Create an array to hold book objects
  let myBooks = [];

  // Book constructor
  class Book {
    constructor(title, pages, read) {
      this.title = title;
      this.pages = pages;
      this.read = read;
    }
  }

  // Add book to the library
  function addBookToLibrary(book) {
    myBooks.push(book);
    displayBooks();
  }

  // Remove book from the library
  function removeBookFromLibrary(bookIndex) {
    myBooks.splice(bookIndex, 1);
    displayBooks();
  }

  // Toggle read status of a book
  function toggleReadStatus(bookIndex) {
    myBooks[bookIndex].read = !myBooks[bookIndex].read;
    displayBooks();
  }

  // Display books in the library
  function displayBooks() {
    // Clear existing books
    while (myLibrary.firstChild) {
      myLibrary.removeChild(myLibrary.firstChild);
    }

    // Add each book to the library
    myBooks.forEach((book, index) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      const bookTitle = document.createElement("h2");
      bookTitle.textContent = book.title;
      bookDiv.appendChild(bookTitle);

      const bookPages = document.createElement("p");
      bookPages.textContent = `Pages: ${book.pages}`;
      bookDiv.appendChild(bookPages);

      const readBtn = document.createElement("button");
      readBtn.classList.add("read-btn");
      readBtn.textContent = book.read ? "Read" : "Unread";
      readBtn.addEventListener("click", () => toggleReadStatus(index));
      bookDiv.appendChild(readBtn);

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => removeBookFromLibrary(index));
      bookDiv.appendChild(removeBtn);

      myLibrary.appendChild(bookDiv);
    });
  }

  // Show the new book form
  function showNewBookForm() {
    newBookForm.style.display = "block";
  }

  // Hide the new book form
  function hideNewBookForm() {
    if (event.target.id === "add-book-btn") {
      newBookForm.style.display = "none";
    }
  }

  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
    const bookTitle = bookNameInput.value;
    const bookPages = parseInt(pagesInput.value);
    const newBook = new Book(bookTitle, bookPages, false);
    addBookToLibrary(newBook);
    hideNewBookForm();
    event.target.reset();
  }

  // Add event listeners
  newBookBtn.addEventListener("click", showNewBookForm);
  newBookForm.addEventListener("click", hideNewBookForm);
  newBookForm
    .querySelector("form")
    .addEventListener("submit", handleFormSubmit);
});
