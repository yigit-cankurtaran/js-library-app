const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  // create a new div element in the box class, with the read and pages id divs saying hello and world

  const newBook = document.createElement("div");
  newBook.classList.add("box");
  newBook.innerHTML = `
    <div id="read">Hello</div>
    <div id="pages">World</div>
    `;
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("bookList");
  document.body.insertBefore(newBook, currentDiv);
});
