const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  // create a new div element in the box class, with the read and pages attributes saying hello and world
  const newBook = document.createElement("div");
  newBook.classList.add("box");
  newBook.innerHTML = `
        <div id="read">
          <h3>Read Status</h3>
        </div>
        <div id="pages">
          <h3>How many pages the book is</h3>
        </div>
        <div id="authors">
          <h3>Who is the author?</h3>
        </div>
`;
  // add the text node to the newly created div
  newBook.appendChild(document.createTextNode("New Book"));
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("bookList");
  document.body.insertBefore(newBook, currentDiv);
});
